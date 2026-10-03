"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { buttonStyles } from "./Button";
import { ArrowRightIcon } from "./icons";

const ease = [0.2, 0.65, 0.3, 1] as const;

const headline: { text: string; gold?: boolean }[][] = [
  [{ text: "Prata" }, { text: "925" }, { text: "com" }],
  [{ text: "selo", gold: true }, { text: "de", gold: true }, { text: "contraste", gold: true }],
];

const stats = [
  { value: "4.9", label: "148 avaliações verificadas" },
  { value: "0%", label: "níquel — hipoalergênicas" },
  { value: "90 dias", label: "de garantia contra oxidação" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  let wordIndex = 0;

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-gold/20">
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-[20%] -top-[30%] size-[1100px] bg-[radial-gradient(closest-side,rgba(198,161,91,0.2),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[45%] -left-[15%] size-[800px] bg-[radial-gradient(closest-side,rgba(201,123,74,0.12),transparent)]"
      />

      <div className="wrap relative grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-20">
        <div>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
            </span>
            Naturalmente marcante
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(40px,6.4vw,84px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            {headline.map((line, i) => (
              <span key={i} className="block">
                {line.map((word) => {
                  const delay = 0.15 + wordIndex++ * 0.08;
                  return (
                    <span key={word.text} className="mr-[0.24em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                      <motion.span
                        className={`inline-block ${word.gold ? "text-gold" : ""}`}
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay, ease }}
                      >
                        {word.text}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p {...fadeUp(0.7)} className="mt-6 max-w-[46ch] text-base text-muted sm:text-lg">
            Semijoias em prata 925 com moissanite, com contraste registrado em cada peça — de Bom Jesus
            (PI) para todo o Brasil.
          </motion.p>

          <motion.div {...fadeUp(0.85)} className="mt-8 flex flex-wrap gap-3.5">
            <a href="#lancamentos" className={`${buttonStyles.gold} group`}>
              Ver lançamentos
              <ArrowRightIcon width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#moissanite" className={buttonStyles.outline}>
              Peças com moissanite
            </a>
          </motion.div>

          <motion.dl
            {...fadeUp(1)}
            className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-gold/20 border-t border-gold/20 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 first:pl-0 sm:px-5">
                <dt className="font-display text-xl font-bold text-cream sm:text-2xl">{stat.value}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px]">
          {/* Moldura deslocada atrás do arco */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 14, y: 14 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="absolute inset-0 rounded-b-3xl rounded-t-full border border-gold/30"
          />

          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="relative aspect-[3/4] overflow-hidden rounded-b-3xl rounded-t-full border border-gold/30 bg-panel"
          >
            <motion.div style={{ y: photoY }} className="absolute inset-0 scale-110">
              <Image
                src="/assets/hero.jpg"
                alt="Modelo usando brinco e ear cuff da coleção DIO Joias em prata 925 com moissanite"
                fill
                priority
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 400px, 300px"
                className="object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </motion.div>

          {/* Selo giratório */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 1.1 }}
            className="absolute -left-5 top-[16%] flex size-[92px] items-center justify-center rounded-full border border-gold/40 bg-bg/90 backdrop-blur sm:-left-10 sm:size-[116px]"
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              aria-hidden
            >
              <defs>
                <path id="hero-seal" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-gold font-display text-[9.5px] font-semibold uppercase tracking-[0.2em]">
                <textPath href="#hero-seal">Contraste registrado · Prata 925 ·</textPath>
              </text>
            </motion.svg>
            <span className="font-display text-xl font-extrabold text-gold sm:text-2xl">925</span>
          </motion.div>

          {/* Chips flutuantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25, ease }}
            className="absolute -right-3 bottom-[22%] sm:-right-8"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              className="rounded-2xl border border-gold/25 bg-panel/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur"
            >
              <p className="font-display text-lg font-bold leading-none text-gold">5% OFF</p>
              <p className="mt-1 text-[11px] text-muted">pagando com PIX</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease }}
            className="absolute -bottom-4 left-2 sm:-left-6"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="rounded-2xl border border-gold/25 bg-panel/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur"
            >
              <p className="font-display text-sm font-bold leading-none text-cream">Frete grátis</p>
              <p className="mt-1 text-[11px] text-muted">acima de R$199</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
