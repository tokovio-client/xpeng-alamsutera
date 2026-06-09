import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyXpeng from "@/components/WhyXpeng";
import Models from "@/components/Models";
import Gallery from "@/components/Gallery";
import Specialist from "@/components/Specialist";
import DealerMap from "@/components/DealerMap";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyXpeng />
      <Models />
      <Gallery />
      <Specialist />
      <DealerMap />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
