import { Reveal } from "./Reveal";

const benefits = [
  { icon: "SELO", title: "Contraste Registrado", text: "Toda peça sai do ateliê com selo de teor conferido." },
  { icon: "FRT", title: "Frete Grátis", text: "Acima de R$199 para todo o Brasil." },
  { icon: "CX", title: "Embalagem para Presente", text: "Estojo de veludo em todas as compras." },
  { icon: "90D", title: "Garantia contra Oxidação", text: "90 dias corridos após o recebimento." },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-[72px]">
      <div className="wrap grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, i) => (
          <Reveal key={benefit.title} index={i} className="flex items-start gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/35 text-[11px] font-bold text-gold">
              {benefit.icon}
            </span>
            <div>
              <h3 className="mt-0.5 font-display text-[17px] font-semibold">{benefit.title}</h3>
              <p className="mt-1 text-[13px] text-muted">{benefit.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
