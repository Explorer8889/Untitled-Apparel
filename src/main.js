// ===== Product Data - "The Foundation" Collection =====

// ===== Google Analytics 4 =====
function trackPageView(path) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
    });
  }
  console.log('[Analytics] Page view:', path);
}

function trackEvent(action, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
  console.log('[Analytics] Event:', action, params);
}

// ===== Color Helpers =====
function colorToSlug(color) {
  return color.toLowerCase().replace(/\s+/g, '-');
}

const productSlugs = {
  1: 'essential-tee',
  2: 'perfect-oxford',
  3: 'straight-jean',
  4: 'relaxed-trouser',
  5: 'heavyweight-hoodie',
  6: 'linen-shirt',
  7: 'field-jacket',
};

function getProductImage(productId, color) {
  const product = products.find(p => p.id === productId);
  if (!product) return '';
  if (color && product.images && product.images[color]) {
    return product.images[color];
  }
  return product.image;
}

function colorToSwatchHex(color) {
  const map = {
    'White': '#FFFFFF',
    'Black': '#1C1C1C',
    'Clay': '#C5694A',
    'Navy': '#1B2838',
    'Light Oxford Blue': '#6B8EBA',
    'Chambray': '#A9B8C9',
    'Raw Indigo': '#2F3E4E',
    'Khaki': '#C3B091',
    'Charcoal': '#4A4A4A',
    'Oatmeal': '#E8DCC8',
    'Natural': '#F4F1EA',
    'Slate': '#708090',
    'Olive': '#6B7E5A',
  };
  return map[color] || '#B8B2A6';
}

const products = [
  {
    id: 1,
    name: 'The Essential Tee',
    category: 'Tops',
    price: 38,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colorways: ['White', 'Black', 'Clay', 'Navy'],
    image: '/essential-tee.png',
    images: {
      'White': '/essential-tee-white.png',
      'Black': '/essential-tee-black.png',
      'Clay': '/essential-tee-clay.png',
      'Navy': '/essential-tee-navy.png',
    },
    description: 'A heavyweight crewneck tee in 230 GSM organic cotton jersey. Relaxed fit with a slightly cropped body, ribbed neckline with clean finish (no tag), set-in sleeves with dropped shoulder seam, and double-needle hem. Pre-shrunk to minimize size loss. The piece you reach for every day.',
  },
  {
    id: 2,
    name: 'The Perfect Oxford',
    category: 'Shirts',
    price: 78,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colorways: ['White', 'Light Oxford Blue', 'Chambray'],
    image: '/perfect-oxford.png',
    images: {
      'White': '/perfect-oxford-white.png',
      'Light Oxford Blue': '/perfect-oxford-light-oxford-blue.png',
      'Chambray': '/perfect-oxford-chambray.png',
    },
    description: 'A classic button-down oxford in 140 GSM organic cotton cloth. Slightly oversized relaxed silhouette, button-down collar with removable stays, box pleat at back yoke, rounded hem (longer in back), mother-of-pearl buttons, and a single chest pocket with subtle label stitch.',
  },
  {
    id: 3,
    name: 'The Straight Jean',
    category: 'Bottoms',
    price: 128,
    sizes: ['28', '29', '30', '31', '32', '33', '34', '36', '38'],
    colorways: ['Raw Indigo', 'Black'],
    sizesNote: '30, 32, 34 inseam',
    image: '/straight-jean.png',
    images: {
      'Raw Indigo': '/straight-jean-raw-indigo.png',
      'Black': '/straight-jean-black.png',
    },
    description: 'A straight-leg jean in 14oz Japanese raw selvedge denim. Medium rise, five-pocket construction with hidden rivets, button fly with branded matte buttons, chainstitch hem (unfinished — cuff or hem to preference), and a vegetable-tanned leather patch. Will develop unique fade patterns with wear.',
  },
  {
    id: 4,
    name: 'The Relaxed Trouser',
    category: 'Bottoms',
    price: 98,
    sizes: ['28', '29', '30', '31', '32', '33', '34', '36', '38'],
    colorways: ['Khaki', 'Charcoal', 'Navy'],
    sizesNote: '30, 32 inseam',
    image: '/relaxed-trouser.png',
    images: {
      'Khaki': '/relaxed-trouser-khaki.png',
      'Charcoal': '/relaxed-trouser-charcoal.png',
      'Navy': '/relaxed-trouser-navy.png',
    },
    description: 'A pleated wide-leg trouser in 280 GSM garment-washed cotton twill. High rise with double forward pleats, wide straight leg opening, side pockets with clean finish, two welt pockets at back, belt loops, zip fly with concealed button closure, and a slightly cropped length that shows the ankle.',
  },
  {
    id: 5,
    name: 'The Heavyweight Hoodie',
    category: 'Knitwear',
    price: 85,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colorways: ['Charcoal', 'Clay', 'Navy', 'Oatmeal'],
    image: '/heavyweight-hoodie.png',
    images: {
      'Charcoal': '/heavyweight-hoodie-charcoal.png',
      'Clay': '/heavyweight-hoodie-clay.png',
      'Navy': '/heavyweight-hoodie-navy.png',
      'Oatmeal': '/heavyweight-hoodie-oatmeal.png',
    },
    description: 'An oversized french terry pullover hoodie in 400 GSM organic cotton. Brushed inside for warmth, double-layer hood with no drawstring (clean front), kangaroo pocket with hidden media channel, raglan sleeves, wide 2×2 ribbed cuffs and hem, flatlock seam detailing, and pre-washed to minimize shrinkage.',
  },
  {
    id: 6,
    name: 'The Linen Shirt',
    category: 'Shirts',
    price: 88,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colorways: ['Natural', 'White', 'Slate'],
    image: '/linen-shirt.png',
    images: {
      'Natural': '/linen-shirt-natural.png',
      'White': '/linen-shirt-white.png',
      'Slate': '/linen-shirt-slate.png',
    },
    description: 'An oversized linen button-down in 100% European flax (160 GSM). Camp collar open front, patch pocket at left chest, rounded hem, corozo nut buttons, rollable sleeves with button tab. Pre-washed stonewash finish for softness from day one.',
  },
  {
    id: 7,
    name: 'The Field Jacket',
    category: 'Outerwear',
    price: 148,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colorways: ['Khaki', 'Navy', 'Olive'],
    image: '/field-jacket.png',
    images: {
      'Khaki': '/field-jacket-khaki.png',
      'Navy': '/field-jacket-navy.png',
      'Olive': '/field-jacket-olive.png',
    },
    description: 'A lightweight cotton chore jacket in 240 GSM organic cotton canvas. Mid-length, relaxed straight fit through body, four front patch pockets (two chest, two lower), corozo nut buttons, triple-needle stitching throughout, adjustable button cuffs, and garment-dyed for unique color variation.',
  },
];

// ===== Cart State =====
let cart = JSON.parse(localStorage.getItem('untitled-cart') || '[]');

function saveCart() {
  localStorage.setItem('untitled-cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

function addToCart(productId, size, color) {
  const existing = cart.find(item => item.productId === productId && item.size === size && item.color === color);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ productId, size, color, qty: 1 });
  }
  saveCart();
  openCart();
}

function removeFromCart(productId, size, color) {
  cart = cart.filter(item => !(item.productId === productId && item.size === size && item.color === color));
  saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

// ===== Cart Modal =====
function openCart() {
  document.getElementById('cart-modal').classList.remove('hidden');
}

function closeCart() {
  document.getElementById('cart-modal').classList.add('hidden');
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-price');

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>Your cart is empty. Start building your foundation.</p></div>';
    totalEl.textContent = '$0.00';
    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return '';
    const itemImage = getProductImage(item.productId, item.color);
    return `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${itemImage}" alt="${product.name} — ${item.color}" loading="lazy" />
        </div>
        <div class="cart-item-info">
          <h4>${product.name}</h4>
          <div class="item-color">Color: ${item.color}</div>
          <div class="item-size">Size: ${item.size}</div>
          <div class="item-price">$${product.price} × ${item.qty}</div>
          <button class="cart-item-remove" data-product-id="${product.id}" data-size="${item.size}" data-color="${item.color}">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `$${getCartTotal().toFixed(2)}`;

  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.productId), btn.dataset.size, btn.dataset.color);
    });
  });
}

// ===== Router (SPA) =====
function navigateTo(path) {
  history.pushState(null, '', path);
  renderRoute();
}

function renderRoute() {
  const path = window.location.pathname;
  const app = document.getElementById('app');

  if (path === '/about') {
    renderAbout(app);
  } else if (path.startsWith('/product/')) {
    const id = parseInt(path.split('/product/')[1]);
    renderProductDetail(app, id);
  } else if (path === '/cart') {
    openCart();
    renderShop(app);
  } else {
    renderShop(app);
  }
}

// ===== Waitlist =====
function initWaitlistForm(container) {
  const form = container.querySelector('#waitlist-form');
  const emailInput = container.querySelector('#waitlist-email');
  const statusEl = container.querySelector('#waitlist-status');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    // Validate
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      statusEl.textContent = 'Please enter a valid email address.';
      statusEl.className = 'waitlist-status error';
      emailInput.focus();
      return;
    }

    // Track signup event
    trackEvent('signup', { method: 'waitlist', email_domain: email.split('@')[1] });
    // Basic analytics event
    console.log('[Analytics] Waitlist signup:', email, new Date().toISOString());

    // Disable form while submitting
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing up...';
    statusEl.textContent = '';
    statusEl.className = 'waitlist-status';

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        statusEl.textContent = 'You\'re on the list. We\'ll be in touch.';
        statusEl.className = 'waitlist-status success';
        emailInput.value = '';
        submitBtn.textContent = 'Signed Up ✓';
        submitBtn.disabled = true;
        // Mark signed up in localStorage
        localStorage.setItem('untitled-waitlist-signed-up', 'true');
        // Close modal after a short delay
        setTimeout(() => closeWaitlistModal(), 2000);
      } else {
        statusEl.textContent = data.error || 'Something went wrong. Try again.';
        statusEl.className = 'waitlist-status error';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Join the Waitlist';
      }
    } catch (err) {
      // Fallback: store in localStorage
      const localEmails = JSON.parse(localStorage.getItem('untitled-waitlist') || '[]');
      if (!localEmails.includes(email)) {
        localEmails.push(email);
        localStorage.setItem('untitled-waitlist', JSON.stringify(localEmails));
      }
      statusEl.textContent = 'You\'re on the list. We\'ll be in touch.';
      statusEl.className = 'waitlist-status success';
      emailInput.value = '';
      submitBtn.textContent = 'Signed Up ✓';
      submitBtn.disabled = true;
      localStorage.setItem('untitled-waitlist-signed-up', 'true');
      console.log('[Waitlist] Stored locally:', email);
      // Close modal after a short delay
      setTimeout(() => closeWaitlistModal(), 2000);
    }
  });
}

// ===== Waitlist Modal =====
let waitlistModalTimer = null;

function showWaitlistModal() {
  const modal = document.getElementById('waitlist-modal');
  if (!modal) return;
  // Don't show if already signed up or dismissed
  if (localStorage.getItem('untitled-waitlist-dismissed') === 'true') return;
  if (localStorage.getItem('untitled-waitlist-signed-up') === 'true') return;
  // Remove hidden class to trigger entrance animation
  modal.classList.remove('hidden');
  // Init form inside modal
  initWaitlistForm(modal);
}

function closeWaitlistModal() {
  const modal = document.getElementById('waitlist-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  localStorage.setItem('untitled-waitlist-dismissed', 'true');
}

function initWaitlistModal() {
  // Show modal after 3 seconds delay
  waitlistModalTimer = setTimeout(showWaitlistModal, 3000);

  // Dismiss on X click
  const closeBtn = document.getElementById('waitlist-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeWaitlistModal);
  }

  // Dismiss on overlay click
  const modal = document.getElementById('waitlist-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeWaitlistModal();
      }
    });
  }
}

// ===== Pages =====
function renderShop(app) {
  app.innerHTML = `
    <section class="hero">
      <div class="brand-tagline">Coming Soon</div>
      <h1>The Foundation<br />is almost here.</h1>
      <p>Seven essential pieces. Endless combinations. Be the first to know when we launch.</p>
    </section>

    <div class="collection-hero">
      <img src="/collection-hero.png" alt="The Foundation Collection" />
    </div>
    <div class="section-title">The Collection</div>
    <div class="product-grid">
      ${products.map(p => `
        <div class="product-card" data-product-id="${p.id}">
          <div class="product-card-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="product-card-body">
            <div class="category">${p.category}</div>
            <h3>${p.name}</h3>
            <div class="price">${p.price}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  app.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo(`/product/${card.dataset.productId}`);
    });
  });

  updateCartCount();
}

function renderProductDetail(app, id) {
  const product = products.find(p => p.id === id);
  if (!product) {
    navigateTo('/');
    return;
  }

  const defaultColor = product.colorways[0];
  const defaultImage = getProductImage(product.id, defaultColor);

  app.innerHTML = `
    <a href="/" class="btn-back" data-nav-back>← Back to Shop</a>
    <div class="product-detail">
      <div class="product-detail-image">
        <div class="product-image-wrapper">
          <img id="detail-main-image" src="${defaultImage}" alt="${product.name} — ${defaultColor}" />
          <span id="detail-color-label" class="color-name-label">${defaultColor}</span>
        </div>
      </div>
      <div class="product-detail-info">
        <div class="category">${product.category}</div>
        <h1>${product.name}</h1>
        <div class="price">$${product.price}</div>
        <p class="description">${product.description}</p>
        <div class="colorways-label">Color</div>
        <div class="color-swatches" id="color-swatches">
          ${product.colorways.map((color, i) => {
            const swatchColor = colorToSwatchHex(color);
            return `
              <button class="color-swatch ${i === 0 ? 'active' : ''}" data-color="${color}" style="background-color: ${swatchColor};${swatchColor === '#FFFFFF' || swatchColor === '#F4F1EA' || swatchColor === '#F5F5DC' ? ' border: 2px solid #B8B2A6;' : ''}" title="${color}">
                <span class="color-swatch-tooltip">${color}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div class="size-selector">
          <label>Select Size</label>
          <div class="size-options">
            ${product.sizes.map(size => `
              <button class="size-btn" data-size="${size}">${size}</button>
            `).join('')}
          </div>
          ${product.sizesNote ? `<div style="font-size:0.75rem;color:var(--color-text-muted);margin-top:0.5rem;">${product.sizesNote}</div>` : ''}
        </div>
        <button id="add-to-cart-btn" class="btn btn-primary btn-full" disabled>Select a size</button>
      </div>
    </div>
  `;

  let selectedSize = null;
  let selectedColor = product.colorways[0];

  // Color swatch clicks
  app.querySelectorAll('.color-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      app.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = btn.dataset.color;
      const newImage = getProductImage(product.id, selectedColor);
      const mainImg = document.getElementById('detail-main-image');
      mainImg.src = newImage;
      mainImg.alt = `${product.name} — ${selectedColor}`;
      document.getElementById('detail-color-label').textContent = selectedColor;
      // Reset size selection when changing color
      selectedSize = null;
      app.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      const addBtn = document.getElementById('add-to-cart-btn');
      addBtn.disabled = true;
      addBtn.textContent = 'Select a size';
    });
  });

  app.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      app.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
      const addBtn = document.getElementById('add-to-cart-btn');
      addBtn.disabled = false;
      addBtn.textContent = `Add to Cart — $${product.price}`;
    });
  });

  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    if (selectedSize) {
      addToCart(product.id, selectedSize, selectedColor);
    }
  });
}

function renderAbout(app) {
  app.innerHTML = `
    <div class="about-page">
      <h1>About Untitled</h1>
      <p>Untitled Apparel was founded on a simple idea: your wardrobe should work for you, not the other way around.</p>
      <p>We design essential pieces that live at the intersection of quality and simplicity. No logos, no gimmicks, no seasonal trends — just well-made clothing in clean silhouettes that pair with everything you already own.</p>
      <p>Every fabric is chosen for durability and feel. Every cut is refined for fit and movement. We produce in limited drops because we'd rather make fewer things well than many things poorly.</p>
      <p>This is clothing that earns its place in your closet.</p>
    </div>
  `;
}

// ===== Size Guide =====
function renderSizeGuide(app) {
  app.innerHTML = `
    <div class="size-guide-page">
      <h1>Size Guide</h1>
      <p class="size-guide-intro">Find your perfect fit. All measurements are in centimeters (cm). If you're between sizes, we recommend sizing up for a relaxed fit or down for a trimmer fit.</p>

      <h2>Tops — The Essential Tee, Perfect Oxford, Linen Shirt</h2>
      <div class="size-table-wrapper">
        <table class="size-table">
          <thead>
            <tr><td>Size</td><th>XS</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>XXL</th></tr>
          </thead>
          <tbody>
            <tr><td>Chest (cm)</td><td>48-52</td><td>52-56</td><td>56-60</td><td>60-64</td><td>64-68</td><td>68-72</td></tr>
            <tr><td>Shoulder (cm)</td><td>44</td><td>47</td><td>50</td><td>53</td><td>56</td><td>59</td></tr>
            <tr><td>Body Length (cm)</td><td>71</td><td>73.5</td><td>76</td><td>78.5</td><td>81</td><td>83.5</td></tr>
            <tr><td>Sleeve (cm)</td><td>62</td><td>63.5</td><td>65</td><td>66.5</td><td>68</td><td>69.5</td></tr>
          </tbody>
        </table>
      </div>
      <p class="size-guide-note"><strong>Fit note:</strong> Tee runs relaxed, slightly oversized. Oxford and Linen Shirt are true to size for a relaxed silhouette.</p>

      <h2>The Heavyweight Hoodie</h2>
      <div class="size-table-wrapper">
        <table class="size-table">
          <thead>
            <tr><td>Size</td><th>XS</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>XXL</th></tr>
          </thead>
          <tbody>
            <tr><td>Chest (cm)</td><td>55</td><td>59</td><td>63</td><td>67</td><td>71</td><td>75</td></tr>
            <tr><td>Body Length (cm)</td><td>66</td><td>69</td><td>72</td><td>75</td><td>78</td><td>81</td></tr>
            <tr><td>Sleeve (cm)</td><td>78</td><td>81</td><td>84</td><td>87</td><td>90</td><td>93</td></tr>
          </tbody>
        </table>
      </div>
      <p class="size-guide-note"><strong>Fit note:</strong> Oversized, boxy fit. Size down for trimmer fit.</p>

      <h2>The Field Jacket</h2>
      <div class="size-table-wrapper">
        <table class="size-table">
          <thead>
            <tr><td>Size</td><th>S</th><th>M</th><th>L</th><th>XL</th></tr>
          </thead>
          <tbody>
            <tr><td>Chest (cm)</td><td>56</td><td>60</td><td>64</td><td>68</td></tr>
            <tr><td>Body Length (cm)</td><td>72</td><td>75</td><td>78</td><td>81</td></tr>
            <tr><td>Sleeve (cm)</td><td>65</td><td>67</td><td>69</td><td>71</td></tr>
          </tbody>
        </table>
      </div>
      <p class="size-guide-note"><strong>Fit note:</strong> Relaxed fit. Can layer over hoodie. True to size.</p>

      <h2>Bottoms — The Straight Jean & Relaxed Trouser</h2>
      <div class="size-table-wrapper">
        <table class="size-table">
          <thead>
            <tr><td>Waist Size</td><th>28</th><th>29</th><th>30</th><th>31</th><th>32</th><th>33</th><th>34</th><th>36</th><th>38</th></tr>
          </thead>
          <tbody>
            <tr><td>Waist (cm)</td><td>36</td><td>37</td><td>38.5</td><td>40</td><td>41</td><td>42.5</td><td>44</td><td>46.5</td><td>49</td></tr>
            <tr><td>Hip (cm)</td><td>47</td><td>48.5</td><td>50</td><td>51</td><td>52</td><td>53.5</td><td>55</td><td>57.5</td><td>60</td></tr>
            <tr><td>Thigh (cm)</td><td>28</td><td>29</td><td>30</td><td>30.5</td><td>31</td><td>32</td><td>33</td><td>34.5</td><td>36</td></tr>
            <tr><td>Leg Opening (cm)</td><td>17</td><td>17.5</td><td>18</td><td>18.5</td><td>19</td><td>19.5</td><td>20</td><td>21</td><td>22</td></tr>
          </tbody>
        </table>
      </div>
      <p class="size-guide-note"><strong>Fit note (Jean):</strong> Straight leg, medium rise, true to size. Raw denim will stretch up to 0.5" in waist. Inseam: 30", 32", or 34".<br />
      <strong>Fit note (Trouser):</strong> High rise, wide-leg. True to size. Inseam: 30" or 32".</p>

      <h2>How to Measure</h2>
      <div class="size-guide-measure">
        <div class="measure-item">
          <strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.
        </div>
        <div class="measure-item">
          <strong>Waist:</strong> Measure around your natural waistline (just above the belly button).
        </div>
        <div class="measure-item">
          <strong>Hip:</strong> Measure around the widest part of your hips.
        </div>
        <div class="measure-item">
          <strong>Inseam:</strong> Measure from the crotch seam to the bottom of the ankle, along the inside of the leg.
        </div>
        <div class="measure-item">
          <strong>Sleeve:</strong> With arm slightly bent, measure from the center back of the neck to the wrist.
        </div>
      </div>
    </div>
  `;
}

// ===== Lookbook =====
function renderLookbook(app) {
  app.innerHTML = `
    <div class="lookbook-page">
      <h1>The Foundation</h1>
      <p class="lookbook-subtitle">Seven pieces. Endless combinations.</p>

      <div class="lookbook-grid">
        <div class="lookbook-spread">
          <img src="/lookbook-page-01.png" alt="The Uniform — Essential Tee, Straight Jean, Field Jacket" loading="lazy" />
          <div class="lookbook-caption">
            <h3>Look 1: The Uniform</h3>
            <p>Essential Tee · Straight Jean · Field Jacket</p>
          </div>
        </div>
        <div class="lookbook-spread">
          <img src="/lookbook-page-02.png" alt="Smart Casual — Perfect Oxford, Relaxed Trouser" loading="lazy" />
          <div class="lookbook-caption">
            <h3>Look 2: Smart Casual</h3>
            <p>Perfect Oxford · Relaxed Trouser</p>
          </div>
        </div>
        <div class="lookbook-spread">
          <img src="/lookbook-page-03.png" alt="Weekend — Heavyweight Hoodie, Straight Jean" loading="lazy" />
          <div class="lookbook-caption">
            <h3>Look 3: Weekend</h3>
            <p>Heavyweight Hoodie · Straight Jean</p>
          </div>
        </div>
        <div class="lookbook-spread">
          <img src="/lookbook-page-04.png" alt="Summer Layers — Linen Shirt, Essential Tee, Relaxed Trouser" loading="lazy" />
          <div class="lookbook-caption">
            <h3>Look 4: Summer Layers</h3>
            <p>Linen Shirt · Essential Tee · Relaxed Trouser</p>
          </div>
        </div>
        <div class="lookbook-spread">
          <img src="/lookbook-page-05.png" alt="Full Collection — Heavyweight Hoodie, Relaxed Trouser, Field Jacket" loading="lazy" />
          <div class="lookbook-caption">
            <h3>Look 5: Full Collection</h3>
            <p>Heavyweight Hoodie · Relaxed Trouser · Field Jacket</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== Legal Pages =====
function renderPrivacy(app) {
  app.innerHTML = `
    <div class="legal-page">
      <h1>Privacy Policy</h1>
      <p class="legal-date">Last updated: June 2025</p>

      <h2>Information We Collect</h2>
      <p>When you sign up for our waitlist or make a purchase, we collect the information you provide: name, email address, shipping address, and payment information (processed securely by Stripe).</p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to process orders, send order confirmations, communicate about your purchase, and send occasional marketing emails (only with your consent). We never sell your personal information to third parties.</p>

      <h2>Data Security</h2>
      <p>We implement industry-standard security measures including SSL encryption. Payment data is handled entirely by Stripe — we never store full credit card numbers.</p>

      <h2>Cookies</h2>
      <p>We use minimal cookies for essential functionality (cart storage) and analytics (Google Analytics, anonymized). You can disable cookies in your browser settings.</p>

      <h2>Contact</h2>
      <p>For privacy-related inquiries, email us at privacy@untitledapparel.com.</p>
    </div>
  `;
}

function renderTerms(app) {
  app.innerHTML = `
    <div class="legal-page">
      <h1>Terms of Service</h1>
      <p class="legal-date">Last updated: June 2025</p>

      <h2>General</h2>
      <p>By using the Untitled Apparel website, you agree to these terms. We reserve the right to update these terms at any time.</p>

      <h2>Products & Pricing</h2>
      <p>All prices are in USD. We make every effort to display accurate product descriptions and pricing, but errors may occur. We reserve the right to correct any errors and cancel orders if necessary.</p>

      <h2>Intellectual Property</h2>
      <p>All content on this site — including logos, designs, product images, and text — is the property of Untitled Apparel and may not be reproduced without permission.</p>

      <h2>Limitation of Liability</h2>
      <p>Untitled Apparel is not liable for any indirect, incidental, or consequential damages arising from the use of this site or our products.</p>
    </div>
  `;
}

function renderShipping(app) {
  app.innerHTML = `
    <div class="legal-page">
      <h1>Shipping & Returns</h1>
      <p class="legal-date">Last updated: June 2025</p>

      <h2>Shipping</h2>
      <p>We ship within the continental United States via USPS or FedEx. Standard shipping takes 3-7 business days. Expedited options are available at checkout.</p>
      <p>Shipping costs are calculated at checkout based on package weight and destination. Free shipping on orders over $150.</p>

      <h2>Returns</h2>
      <p>We accept returns within 30 days of delivery for unworn, unwashed items with tags attached. To initiate a return, email returns@untitledapparel.com with your order number.</p>

      <h2>Refunds</h2>
      <p>Refunds are processed within 5-7 business days of receiving your return. Shipping costs are non-refundable. Original payment method will be credited.</p>

      <h2>Exchanges</h2>
      <p>We offer free size exchanges within the US. Contact us at exchanges@untitledapparel.com to arrange an exchange.</p>
    </div>
  `;
}

// ===== Stripe Configuration =====
// Uses test-mode publishable key by default — swap with your live key for production
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51J1sdfKJ2sdf3J1sdfKJ2sdf3';

// ===== Payment Modal =====
let stripeClient = null;
let elements = null;

function showPaymentModal(total) {
  // Close cart
  closeCart();

  const app = document.getElementById('app');
  const items = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return product ? { name: product.name, qty: item.qty, price: product.price, size: item.size, color: item.color } : null;
  }).filter(Boolean);

  app.innerHTML = `
    <div class="checkout-page">
      <a href="/" class="btn-back" data-nav-back>← Back to Shop</a>
      <h1 class="checkout-title">Checkout</h1>
      <div class="checkout-layout">
        <div class="checkout-summary">
          <h2>Order Summary</h2>
          ${items.map(item => `
            <div class="checkout-item">
              <span>${item.name} × ${item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          `).join('')}
          <div class="checkout-total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
        <div class="checkout-payment">
          <h2>Payment</h2>
          <div id="payment-element">
            <p class="checkout-demo-notice">Secure payment processing via Stripe.</p>
          </div>
          <div id="payment-message" class="payment-message"></div>
          <button id="payment-submit" class="btn btn-primary btn-full" disabled>
            Pay ${total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  `;

  // Create payment intent
  createPaymentIntent(items, total);
}

async function createPaymentIntent(items, total) {
  const submitBtn = document.getElementById('payment-submit');
  const messageEl = document.getElementById('payment-message');

  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: total,
        currency: 'usd',
        items: items.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      messageEl.textContent = data.error || 'Failed to initialize payment.';
      messageEl.className = 'payment-message error';
      submitBtn.disabled = true;
      return;
    }

    // Demo mode — simulate successful payment
    if (data.demo) {
      messageEl.textContent = 'Demo mode — payment simulated.';
      messageEl.className = 'payment-message success';
      submitBtn.disabled = false;
      submitBtn.textContent = `Complete Demo Payment — ${total.toFixed(2)}`;
      submitBtn.onclick = () => completeDemoPayment(data.clientSecret, items, total);
      return;
    }

    // Real Stripe mode
    try {
      stripeClient = Stripe(STRIPE_PUBLISHABLE_KEY);
      elements = stripeClient.elements({ clientSecret: data.clientSecret });

      const paymentElement = elements.create('payment', {
        layout: 'tabs',
      });
      paymentElement.mount('#payment-element');

      submitBtn.disabled = false;
      submitBtn.textContent = `Pay ${total.toFixed(2)}`;

      submitBtn.onclick = async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        const { error } = await stripeClient.confirmPayment({
          elements,
          confirmParams: {
            return_url: window.location.origin + '/order/confirm',
          },
        });

        if (error) {
          messageEl.textContent = error.message;
          messageEl.className = 'payment-message error';
          submitBtn.disabled = false;
          submitBtn.textContent = `Pay ${total.toFixed(2)}`;
        }
      };
    } catch (err) {
      messageEl.textContent = 'Could not load payment form. Using demo mode.';
      messageEl.className = 'payment-message error';
      submitBtn.disabled = false;
      submitBtn.textContent = `Complete Demo Payment — ${total.toFixed(2)}`;
      submitBtn.onclick = () => completeDemoPayment(data.clientSecret, items, total);
    }
  } catch (err) {
    messageEl.textContent = 'Network error. Please try again.';
    messageEl.className = 'payment-message error';
    submitBtn.disabled = true;
  }
}

function completeDemoPayment(clientSecret, items, total) {
  // Store order in localStorage
  const order = {
    id: clientSecret,
    amount: total,
    items,
    status: 'succeeded',
    created: new Date().toISOString(),
    payment_method: 'demo',
  };
  localStorage.setItem('untitled-last-order', JSON.stringify(order));

  // Clear cart
  cart = [];
  saveCart();

  // Navigate to confirmation
  navigateTo('/order/confirm');
}

function renderOrderConfirmation(app) {
  let order;
  try {
    order = JSON.parse(localStorage.getItem('untitled-last-order'));
  } catch { order = null; }

  if (!order) {
    app.innerHTML = `<div class="empty-state"><p>No recent order found.</p><a href="/" class="btn btn-primary" data-nav="home">Continue Shopping</a></div>`;
    return;
  }

  app.innerHTML = `
    <div class="order-confirmation">
      <div class="confirmation-icon">✓</div>
      <h1>Thank you for your order</h1>
      <p class="confirmation-subtitle">Your order has been received and is being processed.</p>
      <div class="confirmation-details">
        <div class="confirmation-row">
          <span>Order ID</span>
          <span class="order-id">${order.id}</span>
        </div>
        <div class="confirmation-row">
          <span>Date</span>
          <span>${new Date(order.created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div class="confirmation-row">
          <span>Total</span>
          <span>${order.amount.toFixed(2)}</span>
        </div>
        <div class="confirmation-row">
          <span>Payment</span>
          <span>${order.payment_method === 'demo' ? 'Demo (Test Mode)' : 'Paid via Stripe'}</span>
        </div>
      </div>
      <h2 class="confirmation-items-title">Items Ordered</h2>
      <div class="confirmation-items">
        ${order.items.map(item => `
          <div class="confirmation-item">
            <span>${item.name} ${item.size ? '(' + item.size + ')' : ''} × ${item.qty}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
      <div class="confirmation-actions">
        <a href="/" class="btn btn-primary" data-nav="home">Continue Shopping</a>
      </div>
    </div>
  `;
}

// ===== Router Update =====
const originalRenderRoute = renderRoute;
renderRoute = function() {
  const path = window.location.pathname;
  const app = document.getElementById('app');

  trackPageView(path);

  if (path === '/about') {
    renderAbout(app);
  } else if (path === '/lookbook') {
    renderLookbook(app);
  } else if (path === '/size-guide') {
    renderSizeGuide(app);
  } else if (path === '/privacy') {
    renderPrivacy(app);
  } else if (path === '/terms') {
    renderTerms(app);
  } else if (path === '/shipping') {
    renderShipping(app);
  } else if (path.startsWith('/product/')) {
    const id = parseInt(path.split('/product/')[1]);
    renderProductDetail(app, id);
  } else if (path === '/order/confirm') {
    renderOrderConfirmation(app);
  } else if (path === '/cart') {
    openCart();
    renderShop(app);
  } else {
    renderShop(app);
  }
};

// ===== Event Listeners =====
document.addEventListener('click', (e) => {
  // Navigation clicks
  const navLink = e.target.closest('[data-nav]');
  if (navLink) {
    e.preventDefault();
    const target = navLink.dataset.nav;
    if (target === 'cart') {
      openCart();
    } else {
      navigateTo(navLink.getAttribute('href'));
    }
  }

  const backBtn = e.target.closest('[data-nav-back]');
  if (backBtn) {
    e.preventDefault();
    navigateTo('/');
  }
});

window.addEventListener('popstate', renderRoute);
document.getElementById('cart-close')?.addEventListener('click', closeCart);

document.addEventListener('click', (e) => {
  const modal = document.getElementById('cart-modal');
  if (e.target === modal) closeCart();
});

// ===== Checkout =====
document.getElementById('checkout-btn')?.addEventListener('click', () => {
  if (cart.length === 0) return;
  const total = getCartTotal();
  showPaymentModal(total);
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  renderRoute();
  updateCartCount();
  renderCartItems();
  initWaitlistModal();
});