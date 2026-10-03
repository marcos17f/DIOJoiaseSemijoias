export const WHATSAPP_LINK = "https://wa.me/5589981328198";

const toBRL = (value: number) => value.toFixed(2).replace(".", ",");

export function formatPrice(value: number) {
  return `R$ ${toBRL(value)}`;
}

export function installmentLabel(price: number, installments: number) {
  return `${installments}x de R$${toBRL(price / installments)} sem juros`;
}

/** 5% de desconto no PIX, arredondado pra baixo em passos de 5 centavos. */
export function pixPrice(price: number) {
  const cents = Math.round(price * 100);
  return (Math.floor((cents * 0.95) / 5) * 5) / 100;
}

export function discountPercent(price: number, was: number) {
  return Math.round((1 - price / was) * 100);
}
