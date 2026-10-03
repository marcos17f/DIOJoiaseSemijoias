"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, WHATSAPP_LINK } from "@/lib/format";
import { buttonStyles } from "./Button";
import { CloseIcon } from "./icons";

const qtyBtn =
  "flex size-[26px] items-center justify-center rounded-full border border-gold/20 text-sm leading-none transition-colors hover:border-gold hover:text-gold";

export function CartDrawer() {
  const { items, totalQty, totalPrice, isOpen, close, changeQty, remove } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  function checkout() {
    if (items.length === 0) return;
    const lines = items.map((item) => `${item.qty}x ${item.name} — ${formatPrice(item.price * item.qty)}`);
    const message = [
      "Olá! Gostaria de finalizar meu pedido:",
      "",
      ...lines,
      "",
      `Total: ${formatPrice(totalPrice)}`,
    ].join("\n");
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            aria-label="Sacola de compras"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-[400px] flex-col border-l border-gold/20 bg-panel"
          >
            <div className="flex items-center justify-between border-b border-gold/20 px-[22px] py-5">
              <h2 className="font-display text-xl font-bold">Sua sacola</h2>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar sacola"
                className="flex size-8 items-center justify-center rounded-full border border-gold/20 transition-colors hover:border-gold hover:text-gold"
              >
                <CloseIcon width={14} height={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-[22px] py-4">
              {items.length === 0 && <p className="text-sm text-muted">Sua sacola está vazia.</p>}
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-3 border-b border-gold/20 py-3.5"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="size-16 shrink-0 rounded-lg border border-gold/20 bg-panel-2 object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col">
                      <p className="mb-1 text-sm">{item.name}</p>
                      <p className="mb-2.5 text-[13px] text-gold">
                        {formatPrice(item.price)} <span className="text-[11px] text-muted">cada</span>
                      </p>
                      <div className="mb-2 flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => changeQty(item.id, -1)}
                          aria-label="Diminuir quantidade"
                          className={qtyBtn}
                        >
                          −
                        </button>
                        <span className="min-w-4 text-center text-sm">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => changeQty(item.id, 1)}
                          aria-label="Aumentar quantidade"
                          className={qtyBtn}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-xs text-muted">
                        Subtotal: <strong className="text-cream">{formatPrice(item.price * item.qty)}</strong>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      className="self-start text-xs text-muted underline transition-colors hover:text-cream"
                    >
                      Remover
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-gold/20 px-[22px] pb-[22px] pt-[18px]">
              <div className="mb-3.5 flex items-center justify-between text-[15px]">
                <span>Total</span>
                <strong className="font-display text-[19px] text-gold">{formatPrice(totalPrice)}</strong>
              </div>
              <button
                type="button"
                onClick={checkout}
                disabled={totalQty === 0}
                className={`${buttonStyles.gold} w-full`}
              >
                Finalizar pedido no WhatsApp
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
