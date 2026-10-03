export type Product = {
  name: string;
  price: number;
  /** Preço "de", só no outlet. */
  was?: number;
  /** Parcelas sem juros. */
  installments: number;
  image: string;
  rating: number;
  reviews: number;
  /** Âncora opcional pra links internos (ex.: #moissanite). */
  anchorId?: string;
};

const img = (file: string) => `/assets/products/${file}.jpg`;

export const launches: Product[] = [
  { name: "Anel Ísis Contraste", price: 89.9, installments: 2, image: img("ring-1"), rating: 0, reviews: 0 },
  { name: "Brinco Argola Aurora", price: 74.9, installments: 2, image: img("earring-1"), rating: 0, reviews: 0 },
  { name: "Colar Ponto Cravejado", price: 119.9, installments: 3, image: img("necklace-1"), rating: 0, reviews: 0 },
  { name: "Pulseira Elo Cubano", price: 99.9, installments: 2, image: img("bracelet-1"), rating: 0, reviews: 0 },
  { name: "Anel Solitário Moissanite", price: 94.9, installments: 2, image: img("ring-2"), rating: 0, reviews: 0 },
  { name: "Brinco Ear Cuff Vera", price: 64.9, installments: 1, image: img("earring-2"), rating: 0, reviews: 0 },
  { name: "Colar Choker Nina", price: 109.9, installments: 2, image: img("necklace-1"), rating: 0, reviews: 0 },
  { name: "Pulseira Riviera Mini", price: 84.9, installments: 2, image: img("bracelet-2"), rating: 0, reviews: 0 },
];

export const bestSellers: Product[] = [
  { name: "Conjunto Aurora (colar+brinco)", price: 159.9, installments: 3, image: img("necklace-1"), rating: 5, reviews: 34 },
  { name: "Anel Aparador Trio", price: 79.9, installments: 2, image: img("ring-2"), rating: 5, reviews: 58 },
  { name: "Brinco Argola Lisa 20mm", price: 59.9, installments: 1, image: img("earring-3"), rating: 5, reviews: 71 },
  { name: "Colar Corrente Cadeado", price: 124.9, installments: 2, image: img("necklace-1"), rating: 5, reviews: 22 },
  { name: "Pulseira Berloques Flor", price: 89.9, installments: 2, image: img("bracelet-2"), rating: 5, reviews: 19 },
  { name: "Conjunto Vera (anel+brinco)", price: 134.9, installments: 2, image: img("ring-2"), rating: 5, reviews: 41 },
  { name: "Brinco Ponto de Luz Moissanite", price: 49.9, installments: 1, image: img("earring-1"), rating: 5, reviews: 63, anchorId: "moissanite" },
  { name: "Colar Pingente Coração", price: 99.9, installments: 2, image: img("necklace-1"), rating: 5, reviews: 15 },
];

export const outlet: Product[] = [
  { name: "Anel Vintage Folha", price: 54.9, was: 99.9, installments: 1, image: img("ring-1"), rating: 5, reviews: 8 },
  { name: "Colar Camadas Trio", price: 79.9, was: 149.9, installments: 1, image: img("necklace-1"), rating: 5, reviews: 5 },
  { name: "Brinco Argola Texturizada", price: 49.9, was: 84.9, installments: 1, image: img("earring-2"), rating: 0, reviews: 0 },
  { name: "Pulseira Tênis Moissanite", price: 99.9, was: 169.9, installments: 2, image: img("bracelet-1"), rating: 5, reviews: 3 },
];
