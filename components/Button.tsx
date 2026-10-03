const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

export const buttonStyles = {
  gold: `${base} sweep bg-gold text-ink hover:opacity-90`,
  outline: `${base} border border-gold/35 text-cream hover:border-gold hover:text-gold`,
};
