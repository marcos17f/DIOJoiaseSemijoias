"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/format";
import { ArrowUpIcon, WhatsAppIcon } from "./icons";

export function FloatingButtons() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setShowTop(y > 600));

  return (
    <>
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener"
        aria-label="Fale com a DIO no WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 1.2 }}
        className="fixed bottom-6 left-4 z-50 flex size-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 sm:left-6"
      >
        <WhatsAppIcon />
      </motion.a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ y: -3 }}
            className="fixed bottom-6 right-4 z-50 flex size-11 items-center justify-center rounded-full border border-gold/35 bg-bg/90 text-gold backdrop-blur sm:right-6"
          >
            <ArrowUpIcon width={18} height={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
