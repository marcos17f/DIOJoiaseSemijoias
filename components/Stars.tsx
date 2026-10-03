export function Stars({ rating, count }: { rating: number; count?: number }) {
  return (
    <span className="text-xs tracking-[1px]" aria-label={`${rating} de 5 estrelas`}>
      <span className="text-gold">{"★".repeat(rating)}</span>
      <span className="text-gold/35">{"☆".repeat(5 - rating)}</span>
      {count !== undefined && <span className="ml-1 text-muted">({count})</span>}
    </span>
  );
}
