// Interações leves — sem alterar navegação/estrutura existente.

const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.wish-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.textContent = btn.textContent.trim() === '♡' ? '♥' : '♡';
  });
});

/* ---------- Carrinho ---------- */
const WHATSAPP_LINK = 'https://api.whatsapp.com/message/5ZLFLZQ2FTH7A1?autoload=1&app_absent=0&utm_source=ig';
const CART_STORAGE_KEY = 'dioCart';

function parsePrice(text) {
  const match = text.match(/([\d.]+,\d{2})/);
  if (!match) return 0;
  return parseFloat(match[1].replace(/\./g, '').replace(',', '.'));
}

function formatPrice(value) {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

let cart = loadCart();

const cartBadge = document.getElementById('cartBadge');
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartTotalEl = document.getElementById('cartTotal');
const cartCheckoutBtn = document.getElementById('cartCheckout');

function addToCart(name, price, image) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: name, name, price, image, qty: 1 });
  }
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  if (cartBadge) cartBadge.textContent = String(totalQty);
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(totalPrice);
  if (cartCheckoutBtn) cartCheckoutBtn.disabled = totalQty === 0;

  if (!cartItemsEl) return;
  cartItemsEl.querySelectorAll('.cart-item').forEach((el) => el.remove());

  if (cart.length === 0) {
    if (cartEmptyEl) cartEmptyEl.hidden = false;
    return;
  }
  if (cartEmptyEl) cartEmptyEl.hidden = true;

  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    const imgHtml = item.image
      ? `<img class="cart-item__img" src="${item.image}" alt="${item.name}">`
      : '';
    row.innerHTML = `
      ${imgHtml}
      <div class="cart-item__body">
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__price">${formatPrice(item.price)} <span class="cart-item__unit">cada</span></p>
        <div class="cart-item__qty">
          <button type="button" data-action="dec" aria-label="Diminuir quantidade">−</button>
          <span>${item.qty}</span>
          <button type="button" data-action="inc" aria-label="Aumentar quantidade">+</button>
        </div>
        <p class="cart-item__subtotal">Subtotal: <strong>${formatPrice(item.price * item.qty)}</strong></p>
      </div>
      <button type="button" class="cart-item__remove" data-action="remove">Remover</button>
    `;
    row.querySelector('[data-action="dec"]').addEventListener('click', () => changeQty(item.id, -1));
    row.querySelector('[data-action="inc"]').addEventListener('click', () => changeQty(item.id, 1));
    row.querySelector('[data-action="remove"]').addEventListener('click', () => removeFromCart(item.id));
    cartItemsEl.appendChild(row);
  });
}

function openCart() {
  if (cartOverlay) cartOverlay.hidden = false;
}

function closeCart() {
  if (cartOverlay) cartOverlay.hidden = true;
}

if (cartBtn) {
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  });
}
if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
if (cartClose) cartClose.addEventListener('click', closeCart);

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
    const lines = cart.map((i) => `${i.qty}x ${i.name} — ${formatPrice(i.price * i.qty)}`);
    const message = [
      'Olá! Gostaria de finalizar meu pedido:',
      '',
      ...lines,
      '',
      `Total: ${formatPrice(totalPrice)}`,
    ].join('\n');
    const url = `${WHATSAPP_LINK}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
}

document.querySelectorAll('.btn-add').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.prod-card');
    if (card) {
      const name = card.querySelector('h4')?.textContent.trim();
      const priceText = card.querySelector('.price-now')?.textContent.trim();
      const image = card.querySelector('.prod-card__media img')?.getAttribute('src');
      if (name && priceText) {
        addToCart(name, parsePrice(priceText), image);
      }
    }
    const original = btn.textContent;
    btn.textContent = 'Adicionado ✓';
    setTimeout(() => { btn.textContent = original; }, 1200);
  });
});

renderCart();

/* ring story: só reproduz o gif quando a seção está visível na tela */
const ringStage = document.getElementById('ringStage');
const ringGif = ringStage ? ringStage.querySelector('.ring-gif') : null;
if (ringStage && ringGif && 'IntersectionObserver' in window){
  const ringObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      ringStage.classList.toggle('playing', entry.isIntersecting);
      if (entry.isIntersecting){
        ringGif.src = ringGif.src; // reinicia o gif do começo ao entrar na tela
      }
    });
  }, { threshold: 0.3 });
  ringObserver.observe(ringStage);
} else if (ringStage){
  ringStage.classList.add('playing');
}
