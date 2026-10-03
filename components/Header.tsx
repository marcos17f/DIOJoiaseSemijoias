"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Brand } from "./Brand";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon } from "./icons";

const links = [
  { label: "Lançamentos", href: "#lancamentos" },
  { label: "Anéis", href: "#categorias" },
  { label: "Brincos", href: "#categorias" },
  { label: "Colares", href: "#categorias" },
  { label: "Pulseiras", href: "#categorias" },
  { label: "Moissanite", href: "#categorias" },
  { label: "Conjuntos", href: "#categorias" },
  { label: "Outlet", href: "#outlet" },
];

const trackClass = "text-xs uppercase tracking-wider text-muted hover:text-gold";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQty, open } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-bg/90 backdrop-blur-md">
      <div className="wrap flex items-center gap-3 py-2.5 sm:gap-9 sm:py-4">
        <div className="mr-auto">
          <Brand tagline />
        </div>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm text-cream transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a href="#" className={trackClass}>
            Rastrear pedido
          </a>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" aria-label="Favoritos" className="transition-colors hover:text-gold">
            <HeartIcon />
          </a>
          <button
            type="button"
            onClick={open}
            aria-label="Sacola"
            className="relative transition-colors hover:text-gold"
          >
            <BagIcon />
            <motion.span
              key={totalQty}
              initial={{ scale: 1.6 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-bg"
            >
              {totalQty}
            </motion.span>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="inline-flex size-8 items-center justify-center rounded-full border border-gold/20 sm:size-[38px] xl:hidden"
          >
            {menuOpen ? <CloseIcon width={16} height={16} /> : <MenuIcon width={16} height={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 1] }}
            className="overflow-hidden border-t border-gold/20 xl:hidden"
          >
            <div className="wrap flex flex-col pb-3.5 pt-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-gold/10 py-2.5 text-sm hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#" onClick={() => setMenuOpen(false)} className={`${trackClass} py-2.5`}>
                Rastrear pedido
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
