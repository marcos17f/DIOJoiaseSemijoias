# DIO Joias & Semijoias

Loja da DIO Joias & Semijoias (prata 925 com moissanite), em **Next.js (App Router) + React +
Tailwind CSS**, com animações em **Framer Motion**. Fontes: **Plus Jakarta Sans** (títulos) e
**Work Sans** (texto), carregadas via `next/font`.

## Rodar localmente

```
npm install
npm run dev
```

Abre em http://localhost:3000. Para gerar a versão de produção: `npm run build` e `npm start`.

## Estrutura

- `app/` — layout (fontes, metadata), página inicial e `globals.css` (paleta e utilitários do Tailwind).
- `components/` — uma seção por arquivo (`Hero`, `Categories`, `ProductSection`, `CartDrawer`...).
- `lib/products.ts` — lista de produtos (lançamentos, mais vendidos, outlet). Para adicionar ou
  alterar uma peça, edite aqui: parcelas, preço no PIX e % de desconto são calculados a partir do preço.
- `lib/cart.tsx` — sacola (salva no `localStorage`); o pedido é finalizado pelo WhatsApp.
- `lib/format.ts` — formatação de preços e o link do WhatsApp.
- `public/assets/` — fotos.

## ⚠️ Imagens são placeholders

As fotos dos cards de categoria e de produto são de banco de imagens (Unsplash, uso livre), usadas
**apenas para preencher o layout** — não são fotos reais das peças da DIO, e algumas se repetem em
vários cards. Troque pelas fotos reais do ateliê antes de publicar: substitua o `.jpg` em
`public/assets/products/` mantendo o nome, ou aponte o campo `image` do produto em
`lib/products.ts` para o novo arquivo. Cards de categoria são 3:4, cards de produto 1:1 e a foto
do hero (`public/assets/hero.jpg`) é retrato 3:4.

## Deploy na Vercel

"Add New Project" → importar o repositório → o preset "Next.js" é detectado sozinho → Deploy.
