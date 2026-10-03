"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import { discountPercent, formatPrice, installmentLabel, pixPrice } from "@/lib/format";
import type { Product } from "@/lib/products";
import { HeartIcon } from "./icons";
import { Stars } from "./Stars";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { add } = useCart();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);
  const addedTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(addedTimer.current), []);

  function handleAdd() {
    add(product.name, product.price, product.image);
    setAdded(true);
    clearTimeout(addedTimer.current);
    addedTimer.current = setTimeout(() => setAdded(false), 1200);
  }

  return (
    <motion.article
      id={product.anchorId}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: Math.min(index % 4, 5) * 0.07, ease: [0.2, 0.65, 0.3, 1] }}
      className="sweep group flex scroll-mt-28 flex-col rounded-2xl border border-gold/20 bg-panel transition-colors duration-300 hover:border-gold/45"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} em prata 925, still-life sobre fundo escuro`}
          fill
          sizes="(min-width: 1080px) 310px, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent to-40%" />

        <span className="absolute left-3 top-3 z-[4] flex size-[34px] items-center justify-center rounded-full border border-gold bg-ink/75 text-[10px] font-bold text-gold ring-1 ring-inset ring-gold/20">
          925
        </span>
        {product.was && (
          <span className="absolute right-3 top-3 z-[4] rounded-full bg-danger px-2.5 py-1 text-[11px] font-bold text-ink">
            -{discountPercent(product.price, product.was)}%
          </span>
        )}
        <motion.button
          type="button"
          whileTap={{ scale: 0.8 }}
          onClick={() => setWished((v) => !v)}
          aria-label={wished ? "Remover dos favoritos" : "Favoritar"}
          aria-pressed={wished}
          className={`absolute bottom-3 right-3 z-[4] flex size-[34px] items-center justify-center rounded-full border border-gold/35 bg-ink/60 backdrop-blur transition-colors ${wished ? "text-gold" : "text-cream"}`}
        >
          <HeartIcon filled={wished} width={16} height={16} />
        </motion.button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3.5 sm:px-[18px] sm:pb-[18px] sm:pt-4">
        <Stars rating={product.rating} count={product.reviews} />
        <h3 className="font-display text-[15px] font-semibold leading-snug sm:text-[17px]">{product.name}</h3>
        <p>
          {product.was && (
            <span className="mr-1.5 text-[13px] text-muted line-through">De {formatPrice(product.was)}</span>
          )}
          <span className="font-display text-[19px] font-bold text-gold">{formatPrice(product.price)}</span>
        </p>
        <p className="text-xs text-muted">{installmentLabel(product.price, product.installments)}</p>
        <p className="text-xs text-muted">{formatPrice(pixPrice(product.price))} no PIX (-5%)</p>

        <button
          type="button"
          onClick={handleAdd}
          className={`relative mt-auto h-10 overflow-hidden rounded-full border text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
            added
              ? "border-gold bg-gold text-ink"
              : "border-gold/35 text-cream hover:border-gold hover:bg-gold hover:text-ink"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={added ? "added" : "add"}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {added ? "Adicionado ✓" : "Adicionar à sacola"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </motion.article>
  );
}
