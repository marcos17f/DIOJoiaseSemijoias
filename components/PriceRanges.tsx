import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const ranges = [
  { icon: "$", range: "Até R$99", title: "Peças de entrada", text: "Brincos, pingentes e mimos para presentear." },
  { icon: "$$", range: "De R$99 a R$199", title: "O mais procurado", text: "Conjuntos, chokers e colares com detalhes." },
  {
    icon: "$$$",
    range: "Acima de R$250",
    title: "Peças statement",
    text: "Moissanite e conjuntos completos, para ocasiões especiais.",
  },
];

export function PriceRanges() {
  return (
    <section className="py-16 sm:py-[72px]">
      <div className="wrap">
        <SectionHead eyebrow="Encontre pelo seu orçamento" title="Compre por faixa de preço" />
        <div className="grid gap-5 lg:grid-cols-3">
          {ranges.map((range, i) => (
            <Reveal
              key={range.range}
              index={i}
              className="flex flex-col gap-3.5 rounded-2xl border border-gold/20 bg-panel p-7 transition-colors duration-300 hover:border-gold/45"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-gold/35 text-[13px] font-bold text-gold">
                {range.icon}
              </span>
              <span className="eyebrow">{range.range}</span>
              <h3 className="font-display text-[22px] font-bold">{range.title}</h3>
              <p className="text-sm text-muted">{range.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
