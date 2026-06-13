import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'usd', items } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  if (process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency,
        metadata: {
          items: JSON.stringify((items || []).map(i => `${i.name} x${i.qty}`)),
        },
      });
      return res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      return res.status(500).json({ error: 'Payment processing error' });
    }
  }

  // Demo mode fallback
  res.status(200).json({ clientSecret: null, demo: true, amount });
}