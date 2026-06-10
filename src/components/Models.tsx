import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";
import { Product, StoreInfo } from "@/lib/tokovio";

const staticModels = [
  {
    name: "G6 PRO",
    price: "Rp 679.000.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC_tp-opS10MskC6ZpN1x3rlidi55usA-ifRuZTTwrrtE94UxCqSvIo50YttOWg8aLko05ixvugqKSdjrRuZ741wLLsd_65KdX13UqIZLmljS-CRqKwJRczUZsDHo6xLDLbQTyxPiZAyTrZcZT1CubhcyPd_F1N0qA52-0XHU_TqQB3ZVHWarQYneRramepw4ZwQRiYe2PzvzIiia1rwb4CCbb3_XtQrB6ONh0VsDA3APsdJzZIQs9GMNmg6mHDdteuPn374ckXPM",
    alt: "XPENG G6 electric SUV in ceramic white studio shot",
  },
  {
    name: "X9 PRO",
    price: "Rp 1.169.000.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPrVv1PkBCgxsj7qzH3ALLyw8QwLROarTdlk05W3gKQKrle3lJ3NHwH60qxELqJE8o_P1NqgqdjJ0dzACRnvIgoz6b-H9M3POUWnanso8AkeTNOyVI8Mey8rsUwcbhxN9YAQTNFpYSBlf-Gm5MfRZ9j7BY8VIRIeLj_lgB_ef-L9InpRSR7WLFZvP01O4p0DzQxyUsTBGa2UkGOeIWlOlh7JulFlxctJphvkDmJJfH2BYFQeZ0wgZMYhc09Hw1EQHHgLroji3wh5s",
    alt: "XPENG X9 flagship MPV in graphite gray at city night",
  },
  {
    name: "X9 PRO+",
    price: "Rp 1.209.000.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiDLijV5bihN4qwHq9n9B3e5P0ZFQiG4zmdTixj8z3_Pz0mIEJ3QEjtnodx3U9m4qhEvoXxCxf4BgKmTGhHLq-fo9MHLuKY81W3ghgJAEvuBWGj5a7KjDZGu4San6HWSEm-sSWbCIWH6w5vgji8fjQOVMBWiicE23L2h6w3Xn9udW1-645kgyx8WxCqiMKXtXR1GDkOB58uztCbHP_EKtE-U0nCPmdqX04RanZTCvyMw5lS1_GVIKyDCLpf4iT4P4_GStUMPxmf-8",
    alt: "XPENG X9 premium interior with ambient cyan lighting",
  },
];

interface ModelsProps {
  products?: Product[];
  store?: StoreInfo | null;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function Models({ products = [], store }: ModelsProps) {
  let whatsappNumber = "6287770189135";
  if (store?.payment_config) {
    try {
      const config = JSON.parse(store.payment_config);
      if (config.phone) {
        whatsappNumber = config.phone.replace(/^[+0]/, "").trim();
        if (!whatsappNumber.startsWith("62")) {
          whatsappNumber = "62" + whatsappNumber;
        }
      }
    } catch {}
  }

  const displayModels =
    products.length > 0
      ? products.map((p) => ({
          name: p.name,
          price: formatPrice(p.price),
          image: p.image_url || "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
          alt: p.description || p.name,
          stock: p.stock,
        }))
      : staticModels.map((m) => ({ ...m, stock: 1 }));

  const firstG6Index = displayModels.findIndex((m) =>
    m.name.toUpperCase().includes("G6")
  );
  const firstX9Index = displayModels.findIndex((m) =>
    m.name.toUpperCase().includes("X9")
  );

  return (
    <ScrollAnimator>
      <section id="models" className="scroll-mt-24 py-20 md:py-40 bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-10 md:mb-20">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label-caps text-label-caps text-primary mb-4 block">
                Now Arriving
              </span>
              <h2 className="font-headline-lg text-4xl md:text-headline-lg">XPENG Collection</h2>
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Previous model"
                className="p-4 border border-outline-variant/30 hover:border-primary transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                aria-label="Next model"
                className="p-4 border border-outline-variant/30 hover:border-primary transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {displayModels.map(({ name, price, image, alt, stock }, index) => {
            const message = `Hi, I'm interested in ordering the XPENG ${name} priced at ${price} from Alam Sutera.`;
            const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            let cardId = undefined;
            if (index === firstG6Index) {
              cardId = "g6";
            } else if (index === firstX9Index) {
              cardId = "x9";
            }

            return (
              <div
                key={name}
                id={cardId}
                className="group relative glass-card p-0 overflow-hidden flex flex-col justify-between h-full scroll-mt-24"
              >
                <div>
                  <div className="h-64 overflow-hidden relative bg-white flex items-center justify-center">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px] z-10">
                      {stock > 0 ? "AVAILABLE STOCK" : "OUT OF STOCK"}
                    </div>
                  </div>
                  <div className="p-8 pb-0">
                    <h3 className="font-headline-lg text-2xl mb-2">{name}</h3>
                    <p className="font-label-caps text-label-caps text-on-surface-variant mb-6">
                      START FROM
                    </p>
                    <div className="flex justify-between items-baseline mb-8">
                      <span className="text-primary font-headline-lg text-3xl">
                        {price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8 pt-4">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-on-surface text-background font-label-caps text-label-caps hover:bg-primary transition-colors block text-center"
                  >
                    EXPLORE MORE / ORDER
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </ScrollAnimator>
  );
}

