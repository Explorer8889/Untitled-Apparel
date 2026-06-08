const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'waitlist-emails.json');
const ORDERS_FILE = path.join(__dirname, 'orders.json');

// Stripe - will be configured via env var. Uses test key if not set.
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
let stripe = null;
if (STRIPE_SECRET_KEY) {
  stripe = require('stripe')(STRIPE_SECRET_KEY);
  console.log('Stripe initialized in live mode');
} else {
  console.log('Stripe not configured — set STRIPE_SECRET_KEY env var. Using demo mode.');
}

function readEmails() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function saveEmail(email) {
  const emails = readEmails();
  const entry = { email, timestamp: new Date().toISOString(), source: 'pre-launch-waitlist' };
  emails.push(entry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(emails, null, 2));
  return entry;
}

function readOrders() {
  try {
    return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function saveOrder(order) {
  const orders = readOrders();
  orders.push(order);
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  return order;
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try { resolve(JSON.parse(body)); } catch (e) { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

function sendJSON(res, code, data) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // === Waitlist Signup ===
  if (req.method === 'POST' && req.url === '/api/waitlist') {
    try {
      const { email } = await parseBody(req);
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return sendJSON(res, 400, { error: 'Invalid email address' });
      }
      const entry = saveEmail(email);
      sendJSON(res, 200, { success: true, message: "You're on the list!", entry });
    } catch (e) {
      sendJSON(res, 400, { error: 'Invalid request' });
    }
    return;
  }

  if (req.method === 'GET' && req.url === '/api/waitlist/count') {
    const emails = readEmails();
    sendJSON(res, 200, { count: emails.length });
    return;
  }

  // === Stripe Payment Intent ===
  if (req.method === 'POST' && req.url === '/api/create-payment-intent') {
    try {
      const { amount, currency = 'usd', items } = await parseBody(req);

      if (!amount || amount <= 0) {
        return sendJSON(res, 400, { error: 'Invalid amount' });
      }

      if (!stripe) {
        // Demo mode — no Stripe key configured
        const demoIntent = {
          id: 'pi_demo_' + Date.now(),
          client_secret: 'pi_demo_secret_' + Date.now(),
          amount,
          currency,
          status: 'requires_payment_method',
          demo: true,
        };
        // Save demo order
        saveOrder({
          id: demoIntent.id,
          amount,
          currency,
          items: items || [],
          status: 'requires_payment_method',
          created: new Date().toISOString(),
          payment_method: 'demo',
        });
        return sendJSON(res, 200, { clientSecret: demoIntent.client_secret, demo: true });
      }

      // Real Stripe mode
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // cents
        currency,
        metadata: {
          items: JSON.stringify((items || []).map(i => `${i.name} x${i.qty}`)),
        },
      });

      // Save order
      saveOrder({
        id: paymentIntent.id,
        amount,
        currency,
        items: items || [],
        status: paymentIntent.status,
        created: new Date().toISOString(),
        payment_method: 'stripe',
      });

      sendJSON(res, 200, { clientSecret: paymentIntent.client_secret });
    } catch (e) {
      console.error('Payment intent error:', e.message);
      sendJSON(res, 500, { error: 'Failed to create payment intent. Check STRIPE_SECRET_KEY.' });
    }
    return;
  }

  // === Order Confirmation ===
  if (req.method === 'GET' && req.url.startsWith('/api/order/')) {
    const orderId = req.url.replace('/api/order/', '');
    const orders = readOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      sendJSON(res, 200, order);
    } else {
      sendJSON(res, 404, { error: 'Order not found' });
    }
    return;
  }

  if (req.method === 'GET' && req.url === '/api/orders') {
    sendJSON(res, 200, readOrders());
    return;
  }

  sendJSON(res, 404, { error: 'Not found' });
});

const PORT = 3456;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Untitled Apparel API server running on port ${PORT}`);
  if (!STRIPE_SECRET_KEY) console.log('⚠️  Stripe in demo mode — set STRIPE_SECRET_KEY env var for live payments.');
});