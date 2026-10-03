import { Reveal } from "./Reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  link?: string;
};

export function SectionHead({ eyebrow, title, subtitle, link }: SectionHeadProps) {
  return (
    <Reveal className="mb-7 flex flex-wrap items-end justify-between gap-6">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-base text-muted sm:text-[17px]">{subtitle}</p>}
      </div>
      {link && (
        <a
          href="#"
          className="whitespace-nowrap border-b border-gold/35 pb-1 text-[13px] uppercase tracking-wider text-gold transition-colors hover:border-gold"
        >
          {link}
        </a>
      )}
    </Reveal>
  );
}
