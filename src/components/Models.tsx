import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

const models = [
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

export default function Models() {
  return (
    <ScrollAnimator>
      <section className="py-40 bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop mb-20">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label-caps text-label-caps text-primary mb-4 block">
                AVAILABLE NOW
              </span>
              <h2 className="font-headline-lg text-headline-lg">OUR MODEL</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-desktop max-w-container-max mx-auto">
          {models.map(({ name, price, image, alt }) => (
            <div
              key={name}
              className="group relative glass-card p-0 overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px] z-10">
                  AVAILABLE STOCK
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-lg text-2xl mb-2">{name}</h3>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-6">
                  START FROM
                </p>
                <div className="flex justify-between items-baseline mb-8">
                  <span className="text-primary font-headline-lg text-3xl">
                    {price}
                  </span>
                </div>
                <button className="w-full py-4 bg-on-surface text-background font-label-caps text-label-caps hover:bg-primary transition-colors">
                  EXPLORE MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimator>
  );
}
