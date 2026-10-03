import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Stars } from "./Stars";

const reviews = [
  {
    rating: 5,
    quote: "Peça linda, chegou rapidinho e bem embalada. Já quero comprar mais.",
    author: "Beatriz A.",
    product: "Anel Solitário Moissanite",
  },
  {
    rating: 5,
    quote: "Comprei de presente para minha mãe, ela amou. Prata de verdade, não escureceu nada.",
    author: "Camila R.",
    product: "Conjunto Aurora",
  },
  {
    rating: 4,
    quote: "Atendimento pelo WhatsApp foi rápido e atencioso. O brinco é ainda mais bonito ao vivo.",
    author: "Larissa M.",
    product: "Brinco Argola Aurora",
  },
  {
    rating: 5,
    quote: "Qualidade impecável, embalagem de presente linda. Já é a terceira peça que compro.",
    author: "Patrícia S.",
    product: "Colar Choker Nina",
  },
];

export function Reviews() {
  return (
    <section className="py-16 sm:py-[72px]">
      <div className="wrap">
        <SectionHead eyebrow="Avaliações verificadas" title="O que falam da gente" link="Ver todas as avaliações" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={review.author} index={i} className="h-full">
              <article className="flex h-full flex-col gap-3.5 rounded-2xl border border-gold/20 bg-panel p-[22px]">
                <Stars rating={review.rating} />
                <p className="text-[15px] leading-relaxed">“{review.quote}”</p>
                <div className="mt-auto flex items-center gap-2.5">
                  <span className="flex size-[34px] items-center justify-center rounded-full border border-gold/20 bg-panel-2 font-display text-sm font-bold text-gold">
                    {review.author[0]}
                  </span>
                  <span>
                    <strong className="block text-[13px]">{review.author}</strong>
                    <span className="block text-xs text-muted">{review.product}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
