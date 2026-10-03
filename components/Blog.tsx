import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const posts = [
  { tag: "Guia", title: "Prata 925 x folheado a ouro: qual escolher?" },
  { tag: "Cuidados", title: "Como cuidar da sua moissanite no dia a dia" },
  { tag: "Guia de aros", title: "Como descobrir o tamanho certo do seu anel" },
  { tag: "Estilo", title: "Choker ou colar: qual valoriza mais o seu decote" },
];

export function Blog() {
  return (
    <section className="py-16 sm:py-[72px]">
      <div className="wrap">
        <SectionHead eyebrow="Para saber mais" title="Novidades do blog" link="Ver todos os posts" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.title} index={i} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-gold/20 bg-panel p-[22px] transition-colors duration-300 hover:border-gold/45">
                <span className="eyebrow">{post.tag}</span>
                <h3 className="mb-3.5 mt-2.5 font-display text-lg font-semibold leading-snug">{post.title}</h3>
                <a href="#" className="mt-auto text-[13px] text-gold">
                  Ler mais{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
