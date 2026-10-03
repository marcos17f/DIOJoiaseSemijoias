import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { SectionHead } from "./SectionHead";

type ProductSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  products: Product[];
};

export function ProductSection({ id, eyebrow, title, subtitle, products }: ProductSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-[72px]">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} subtitle={subtitle} link="Ver todas" />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
