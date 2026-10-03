"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Posição do item no grid — vira um pequeno atraso em cascata. */
  index?: number;
};

export function Reveal({ children, className, index = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: Math.min(index, 5) * 0.07, ease: [0.2, 0.65, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
