import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyXpeng from "@/components/WhyXpeng";
import Models from "@/components/Models";
import Gallery from "@/components/Gallery";
import Specialist from "@/components/Specialist";
import DealerMap from "@/components/DealerMap";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getStore, getStoreProducts } from "@/lib/tokovio";

export default async function Home() {
  const [store, products] = await Promise.all([
    getStore(),
    getStoreProducts(),
  ]);

  return (
    <main>
      <Navbar store={store} />
      <Hero store={store} />
      <WhyXpeng />
      <Models products={products} store={store} />
      <Gallery />
      <Specialist store={store} />
      <DealerMap />
      <Footer store={store} />
      <FloatingWhatsApp store={store} />
    </main>
  );
}

