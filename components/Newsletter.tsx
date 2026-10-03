"use client";

import { buttonStyles } from "./Button";
import { Reveal } from "./Reveal";

export function Newsletter() {
  return (
    <section className="border-y border-gold/20 bg-panel">
      <Reveal className="wrap flex flex-wrap items-center justify-between gap-8 py-14">
        <div>
          <h2 className="font-display text-[28px] font-bold tracking-tight">Receba peças novas em primeira mão</h2>
          <p className="mt-1.5 text-sm text-muted">
            Uma mensagem por semana, sem spam. Descontos exclusivos para assinantes.
          </p>
        </div>
        <div>
          {/* Ainda sem backend de newsletter: o envio não faz nada, como no site original. */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-wrap gap-2.5">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              aria-label="Seu e-mail"
              className="min-w-[260px] flex-1 rounded-full border border-gold/35 bg-transparent px-5 py-3 text-sm text-cream outline-none transition-colors placeholder:text-muted focus:border-gold"
            />
            <button type="submit" className={buttonStyles.gold}>
              Assinar
            </button>
          </form>
          <small className="mt-2 block text-[11px] text-muted">
            Ao assinar, você concorda em receber nossos e-mails.
          </small>
        </div>
      </Reveal>
    </section>
  );
}
