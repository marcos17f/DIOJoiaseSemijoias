export function Brand({ tagline = false }: { tagline?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2 sm:gap-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold font-display text-[11px] font-bold tracking-wider text-gold sm:size-[42px] sm:text-sm">
        DIO
      </span>
      <span className="flex flex-col leading-none">
        <strong className="font-display text-base font-bold tracking-tight text-cream sm:text-[22px]">
          Dio Joias &amp; Semijoias
        </strong>
        {tagline && (
          <span className="mt-1 text-[8px] tracking-[0.22em] text-gold sm:mt-1.5 sm:text-[10px]">
            PRATA 925 · MOISSANITE
          </span>
        )}
      </span>
    </a>
  );
}
