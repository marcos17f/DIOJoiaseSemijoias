"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function RingStory() {
  const stageRef = useRef<HTMLDivElement>(null);
  const gifRef = useRef<HTMLImageElement>(null);
  const playing = useInView(stageRef, { amount: 0.3 });

  // Reinicia o gif do começo sempre que a seção entra na tela.
  useEffect(() => {
    const gif = gifRef.current;
    if (playing && gif) gif.src = gif.src;
  }, [playing]);

  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden border-b border-gold/20 bg-panel lg:min-h-[520px]">
      <motion.div
        ref={stageRef}
        aria-hidden
        animate={{ opacity: playing ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- gif animado, sem otimização do next/image */}
        <img
          ref={gifRef}
          src="/assets/anelCravejado/anel.gif"
          alt=""
          loading="lazy"
          className="size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/80" />
      </motion.div>

      <div className="wrap relative z-10 flex justify-center py-[90px] text-center">
        <Reveal className="max-w-[640px]">
          <span className="eyebrow">O ritual de cada peça</span>
          <h2 className="mt-2.5 font-display text-[clamp(28px,3.6vw,44px)] font-bold leading-tight tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
            Cravejada à mão.
            <br />
            Guardada com cuidado.
          </h2>
          <p className="mx-auto mt-3.5 max-w-[44ch] text-[15px] text-muted">
            Cada pedra é assentada uma a uma, com o selo de contraste conferido antes de qualquer peça
            sair do ateliê. Ao final, ela descansa na sua caixinha de veludo — pronta para presentear.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
