import { Benefits } from "@/components/Benefits";
import { Blog } from "@/components/Blog";
import { CartDrawer } from "@/components/CartDrawer";
import { Categories } from "@/components/Categories";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { PriceRanges } from "@/components/PriceRanges";
import { ProductSection } from "@/components/ProductSection";
import { Reviews } from "@/components/Reviews";
import { RingStory } from "@/components/RingStory";
import { InfoBar, Ticker } from "@/components/TopBars";
import { bestSellers, launches, outlet } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Ticker />
      <InfoBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <RingStory />
        <ProductSection
          id="lancamentos"
          eyebrow="Recém-chegadas"
          title="Lançamentos"
          subtitle="Você merece esse brilho."
          products={launches}
        />
        <ProductSection
          eyebrow="Preferidas do ateliê"
          title="Mais vendidos"
          subtitle="O brilho que todo mundo quer — garanta o seu antes que acabe."
          products={bestSellers}
        />
        <PriceRanges />
        <ProductSection
          id="outlet"
          eyebrow="Últimas peças"
          title="Outlet"
          subtitle="Peças de coleções anteriores, com desconto e contraste garantido."
          products={outlet}
        />
        <Benefits />
        <Blog />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
      <FloatingButtons />
      <CartDrawer />
    </>
  );
}
