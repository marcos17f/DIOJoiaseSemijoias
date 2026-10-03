import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const categories = [
  { name: "Colares", detail: "Correntes e pingentes", image: "necklace-1", alt: "Colares em prata 925" },
  { name: "Brincos", detail: "Argolas e ear cuffs", image: "earring-1", alt: "Brincos em prata 925" },
  { name: "Anéis", detail: "Solitários e aparadores", image: "ring-1", alt: "Anéis em prata 925 com moissanite" },
  { name: "Chokers", detail: "Gargantilhas ajustáveis", image: "necklace-1", alt: "Chokers em prata 925" },
  { name: "Pulseiras", detail: "Braceletes e berloques", image: "bracelet-1", alt: "Pulseiras em prata 925" },
];

export function Categories() {
  return (
    <section id="categorias" className="scroll-mt-24 py-16 sm:py-[72px]">
      <div className="wrap">
        <SectionHead
          eyebrow="Curadoria"
          title="Compre por categorias"
          subtitle="Encontre a peça certa para cada momento."
          link="Ver catálogo completo"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-5">
          {categories.map((category, i) => (
            <Reveal key={category.name} index={i}>
              <a
                href="#"
                className="sweep group block aspect-[3/4] rounded-2xl border border-gold/20 bg-panel"
              >
                <Image
                  src={`/assets/products/${category.image}.jpg`}
                  alt={`${category.alt}, still-life sobre fundo escuro`}
                  fill
                  sizes="(min-width: 1280px) 250px, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 from-10% to-transparent to-55%" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-[18px]">
                  <h3 className="font-display text-lg font-bold sm:text-xl">{category.name}</h3>
                  <p className="mt-1 text-[13px] text-muted">{category.detail}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
