/* ---------------- Product data ---------------- */
const ICONS = {
  ring: `<circle cx="20" cy="22" r="12"/><circle cx="20" cy="22" r="7.5"/><path d="M20 10l-4 -6h8z"/>`,
  earring: `<circle cx="20" cy="9" r="3"/><path d="M20 12 Q20 22 12 28"/><circle cx="12" cy="31" r="4.5"/>`,
  necklace: `<path d="M6 8 Q20 30 34 8" stroke-dasharray="0" fill="none"/><circle cx="20" cy="28" r="5"/>`,
  bracelet: `<ellipse cx="20" cy="20" rx="16" ry="9"/><ellipse cx="20" cy="20" rx="16" ry="9" transform="rotate(60 20 20)"/>`
};

function iconSvg(type){
  return `<svg viewBox="0 0 40 40">${ICONS[type]}</svg>`;
}
function stars(rating, count){
  let s='';
  for(let i=1;i<=5;i++){
    s += `<svg viewBox="0 0 24 24" fill="${i<=Math.round(rating)?'var(--gold)':'none'}" stroke="var(--gold)" stroke-width="1">
      <path d="M12 2l3.1 6.6 7.1.9-5.2 4.9 1.4 7-6.4-3.6-6.4 3.6 1.4-7-5.2-4.9 7.1-.9z"/></svg>`;
  }
  return `<div class="prod-stars">${s}<span class="count">(${count})</span></div>`;
}

function productCard(p){
  const priceHtml = p.old
    ? `<span class="old">De R$ ${p.old}</span><span class="now">R$ ${p.price}</span>`
    : `<span class="now">R$ ${p.price}</span>`;
  return `
  <div class="prod-card" data-name="${p.name}">
    <div class="prod-thumb">
      <div class="hallmark sm"><span>${p.hallmark}</span></div>
      ${p.discount ? `<div class="tag">-${p.discount}%</div>` : ''}
      ${iconSvg(p.icon)}
      <button class="fav" aria-label="Favoritar ${p.name}">
        <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.6 8 2.2 4.5 6 4.5c2.1 0 3.6 1.2 6 3.7 2.4-2.5 3.9-3.7 6-3.7 3.8 0 5.4 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg>
      </button>
    </div>
    <div class="prod-body">
      ${stars(p.rating,p.count)}
      <h3 class="prod-name">${p.name}</h3>
      <div class="prod-price">
        ${priceHtml}
        <span class="inst">${p.inst}</span>
        <span class="pix">R$ ${p.pix} no PIX (-5%)</span>
      </div>
      <button class="btn-add" data-add="${p.name}">Adicionar à sacola</button>
    </div>
  </div>`;
}

const lancamentos = [
  {name:"Anel Ísis Contraste", icon:"ring", hallmark:"925", rating:0, count:0, price:"89,90", inst:"2x de R$44,95 sem juros", pix:"85,40"},
  {name:"Brinco Argola Aurora", icon:"earring", hallmark:"925", rating:0, count:0, price:"74,90", inst:"2x de R$37,45 sem juros", pix:"71,15"},
  {name:"Colar Ponto Cravejado", icon:"necklace", hallmark:"925", rating:0, count:0, price:"119,90", inst:"3x de R$39,97 sem juros", pix:"113,90"},
  {name:"Pulseira Elo Cubano", icon:"bracelet", hallmark:"925", rating:0, count:0, price:"99,90", inst:"2x de R$49,95 sem juros", pix:"94,90"},
  {name:"Anel Solitário Moissanite", icon:"ring", hallmark:"925", rating:0, count:0, price:"94,90", inst:"2x de R$47,45 sem juros", pix:"90,15"},
  {name:"Brinco Ear Cuff Vera", icon:"earring", hallmark:"925", rating:0, count:0, price:"64,90", inst:"1x de R$64,90 sem juros", pix:"61,65"},
  {name:"Colar Choker Nina", icon:"necklace", hallmark:"925", rating:0, count:0, price:"109,90", inst:"2x de R$54,95 sem juros", pix:"104,40"},
  {name:"Pulseira Riviera Mini", icon:"bracelet", hallmark:"925", rating:0, count:0, price:"84,90", inst:"2x de R$42,45 sem juros", pix:"80,65"},
];

const vendidos = [
  {name:"Conjunto Aurora (colar+brinco)", icon:"necklace", hallmark:"925", rating:5, count:34, price:"159,90", inst:"3x de R$53,30 sem juros", pix:"151,90"},
  {name:"Anel Aparador Trio", icon:"ring", hallmark:"925", rating:4.9, count:58, price:"79,90", inst:"2x de R$39,95 sem juros", pix:"75,90"},
  {name:"Brinco Argola Lisa 20mm", icon:"earring", hallmark:"925", rating:5, count:71, price:"59,90", inst:"1x de R$59,90 sem juros", pix:"56,90"},
  {name:"Colar Corrente Cadeado", icon:"necklace", hallmark:"925", rating:4.8, count:22, price:"124,90", inst:"2x de R$62,45 sem juros", pix:"118,65"},
  {name:"Pulseira Berloques Flor", icon:"bracelet", hallmark:"925", rating:5, count:19, price:"89,90", inst:"2x de R$44,95 sem juros", pix:"85,40"},
  {name:"Conjunto Vera (anel+brinco)", icon:"ring", hallmark:"925", rating:4.9, count:41, price:"134,90", inst:"2x de R$67,45 sem juros", pix:"128,15"},
  {name:"Brinco Ponto de Luz Moissanite", icon:"earring", hallmark:"925", rating:5, count:63, price:"49,90", inst:"1x de R$49,90 sem juros", pix:"47,40"},
  {name:"Colar Pingente Coração", icon:"necklace", hallmark:"925", rating:4.7, count:15, price:"99,90", inst:"2x de R$49,95 sem juros", pix:"94,90"},
];

const outlet = [
  {name:"Anel Vintage Folha", icon:"ring", hallmark:"925", rating:5, count:8, old:"99,90", price:"54,90", discount:45, inst:"1x de R$54,90 sem juros", pix:"52,15"},
  {name:"Colar Camadas Trio", icon:"necklace", hallmark:"925", rating:4.6, count:5, old:"149,90", price:"79,90", discount:47, inst:"1x de R$79,90 sem juros", pix:"75,90"},
  {name:"Brinco Argola Texturizada", icon:"earring", hallmark:"925", rating:0, count:0, old:"84,90", price:"49,90", discount:41, inst:"1x de R$49,90 sem juros", pix:"47,40"},
  {name:"Pulseira Tênis Moissanite", icon:"bracelet", hallmark:"925", rating:5, count:3, old:"169,90", price:"99,90", discount:41, inst:"2x de R$49,95 sem juros", pix:"94,90"},
];

document.getElementById('grid-lancamentos').innerHTML = lancamentos.map(productCard).join('');
document.getElementById('grid-vendidos').innerHTML = vendidos.map(productCard).join('');
document.getElementById('grid-outlet').innerHTML = outlet.map(productCard).join('');

/* ---------------- Interactions ---------------- */
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
let toastTimer;

function showToast(){
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2200);
}

document.body.addEventListener('click', (e)=>{
  const addBtn = e.target.closest('[data-add]');
  if(addBtn){
    addToCart(addBtn.dataset.add);
    toastMsg.textContent = `${addBtn.dataset.add} — adicionado à sacola`;
    showToast();
  }
  const favBtn = e.target.closest('.fav');
  if(favBtn){
    favBtn.style.color = favBtn.style.color === 'var(--gold-bright)' ? '' : 'var(--gold-bright)';
  }
});

/* ---------------- Cart (client-side only — pedido fechado via WhatsApp) ---------------- */
const WHATSAPP_NUMBER = '558981328198';
const ALL_PRODUCTS = [...lancamentos, ...vendidos, ...outlet];
const PRODUCT_BY_NAME = Object.fromEntries(ALL_PRODUCTS.map(p => [p.name, p]));
const CART_KEY = 'dio_cart_v1';

function parseBRL(str){ return parseFloat(String(str).replace(',', '.')); }
function formatBRL(num){ return num.toFixed(2).replace('.', ','); }

function loadCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch{ return []; }
}
function saveCart(){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

let cart = loadCart();

function addToCart(name){
  const item = cart.find(i => i.name === name);
  if(item){ item.qty++; } else { cart.push({name, qty:1}); }
  saveCart();
  renderCart();
}
function changeQty(name, delta){
  const item = cart.find(i => i.name === name);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ cart = cart.filter(i => i.name !== name); }
  saveCart();
  renderCart();
}
function removeFromCart(name){
  cart = cart.filter(i => i.name !== name);
  saveCart();
  renderCart();
}
function cartTotalCount(){
  return cart.reduce((sum, i) => sum + i.qty, 0);
}
function cartTotalValue(){
  return cart.reduce((sum, i) => {
    const p = PRODUCT_BY_NAME[i.name];
    return sum + (p ? parseBRL(p.price) * i.qty : 0);
  }, 0);
}

const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartTotalEl = document.getElementById('cartTotal');
const cartWhatsAppBtn = document.getElementById('cartWhatsApp');

function renderCart(){
  cartCountEl.textContent = cartTotalCount();
  const hasItems = cart.length > 0;
  cartEmptyEl.classList.toggle('show', !hasItems);
  cartWhatsAppBtn.disabled = !hasItems;
  cartItemsEl.innerHTML = cart.map(i => {
    const p = PRODUCT_BY_NAME[i.name];
    if(!p) return '';
    const subtotal = parseBRL(p.price) * i.qty;
    return `
    <div class="cart-item" data-name="${p.name}">
      <div class="ci-info">
        <b>${p.name}</b>
        <span>R$ ${p.price} cada</span>
      </div>
      <div class="ci-subtotal">R$ ${formatBRL(subtotal)}</div>
      <div class="ci-qty">
        <button class="qty-btn" data-qty-down="${p.name}" aria-label="Diminuir quantidade">−</button>
        <span>${i.qty}</span>
        <button class="qty-btn" data-qty-up="${p.name}" aria-label="Aumentar quantidade">+</button>
      </div>
      <button class="ci-remove" data-remove="${p.name}" aria-label="Remover ${p.name}">×</button>
    </div>`;
  }).join('');
  cartTotalEl.textContent = `R$ ${formatBRL(cartTotalValue())}`;
}

const cartDrawer = document.getElementById('cartDrawer');
const cartScrim = document.getElementById('cartScrim');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
function openCart(){ cartDrawer.classList.add('open'); cartScrim.classList.add('open'); }
function shutCart(){ cartDrawer.classList.remove('open'); cartScrim.classList.remove('open'); }
cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', shutCart);
cartScrim.addEventListener('click', shutCart);

cartItemsEl.addEventListener('click', (e)=>{
  const up = e.target.closest('[data-qty-up]');
  const down = e.target.closest('[data-qty-down]');
  const rm = e.target.closest('[data-remove]');
  if(up) changeQty(up.dataset.qtyUp, 1);
  if(down) changeQty(down.dataset.qtyDown, -1);
  if(rm) removeFromCart(rm.dataset.remove);
});

cartWhatsAppBtn.addEventListener('click', ()=>{
  if(cart.length === 0) return;
  const lines = cart.map(i => {
    const p = PRODUCT_BY_NAME[i.name];
    const subtotal = parseBRL(p.price) * i.qty;
    return `• ${i.qty}x ${p.name} — R$ ${formatBRL(subtotal)}`;
  });
  const message = [
    'Olá! Vim do site da DIO Joias & Semijoias e quero confirmar este pedido:',
    '',
    ...lines,
    '',
    `Total: R$ ${formatBRL(cartTotalValue())}`,
    '',
    'Podem confirmar disponibilidade e forma de pagamento?'
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

renderCart();

document.getElementById('nlForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  toastMsg.textContent = 'Inscrição confirmada — bem-vinda(o)!';
  showToast();
  e.target.reset();
});

/* mobile nav */
const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const scrim = document.getElementById('scrim');
const closeNav = document.getElementById('closeNav');
function openNav(){ mobileNav.classList.add('open'); scrim.classList.add('open'); }
function shutNav(){ mobileNav.classList.remove('open'); scrim.classList.remove('open'); }
burgerBtn.addEventListener('click', openNav);
closeNav.addEventListener('click', shutNav);
scrim.addEventListener('click', shutNav);
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', shutNav));

/* back to top */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', ()=>{
  backTop.classList.toggle('show', window.scrollY > 500);
});
backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
