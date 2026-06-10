import ScrollAnimator from "./ScrollAnimator";

const features = [
  {
    icon: "electric_car",
    label: "The Future of Driving",
    image: "https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/b33ec948b93d404d9b1d84181c55cdd6.jpg?x-oss-process=image%2Fresize%2Cw_800%2Fquality%2Cq_80",
  },
  {
    icon: "bolt",
    label: "Ultra-Fast Charging",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC_tp-opS10MskC6ZpN1x3rlidi55usA-ifRuZTTwrrtE94UxCqSvIo50YttOWg8aLko05ixvugqKSdjrRuZ741wLLsd_65KdX13UqIZLmljS-CRqKwJRczUZsDHo6xLDLbQTyxPiZAyTrZcZT1CubhcyPd_F1N0qA52-0XHU_TqQB3ZVHWarQYneRramepw4ZwQRiYe2PzvzIiia1rwb4CCbb3_XtQrB6ONh0VsDA3APsdJzZIQs9GMNmg6mHDdteuPn374ckXPM",
  },
  {
    icon: "devices",
    label: "Connected Living",
    image: "https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/a519b283b156449baafbf149cbef85be.jpg?name=New+X9+PC-P2-2&w=800",
  },
  {
    icon: "weekend",
    label: "First Class Comfort",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiDLijV5bihN4qwHq9n9B3e5P0ZFQiG4zmdTixj8z3_Pz0mIEJ3QEjtnodx3U9m4qhEvoXxCxf4BgKmTGhHLq-fo9MHLuKY81W3ghgJAEvuBWGj5a7KjDZGu4San6HWSEm-sSWbCIWH6w5vgji8fjQOVMBWiicE23L2h6w3Xn9udW1-645kgyx8WxCqiMKXtXR1GDkOB58uztCbHP_EKtE-U0nCPmdqX04RanZTCvyMw5lS1_GVIKyDCLpf4iT4P4_GStUMPxmf-8",
  },
  {
    icon: "memory",
    label: "Advanced Intelligence",
    image: "https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/34e946d9b0334643bd635568b1cc6c94.jpg?x-oss-process=image%2Fresize%2Cw_800%2Fquality%2Cq_80",
  },
];

export default function WhyXpeng() {
  return (
    <ScrollAnimator>
      <section id="services" className="scroll-mt-24 py-20 md:py-40 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left column */}
            <div>
              <h2 className="font-headline-lg text-4xl md:text-headline-lg mb-8">
                XPENG for Best Experience
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-lg">
                The thrill of tomorrow starts now, WITH XPENG.
                <br />
                See it. Feel it. Discover the future, today
              </p>
              <div className="space-y-4">
                <h3 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold tracking-tight">
                  Discover XPENG
                </h3>
                <a
                  href="https://wa.me/6287770189135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-white transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://img.magnific.com/premium-vector/vector-whatsapp-social-media-logo_1093524-447.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="WhatsApp"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  087770189135
                </a>
              </div>
            </div>

            {/* Right column – feature cards */}
            <div>
              {/* Desktop grid */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map(({ icon, label }, index) => (
                  <div
                    key={label}
                    className={`group p-6 md:p-8 glass-card flex flex-col justify-between min-h-[150px] md:min-h-[170px] hover:border-primary/50 transition-all duration-300 ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="material-symbols-outlined text-primary text-4xl">
                        {icon}
                      </span>
                      <span className="text-white/10 font-mono text-xl group-hover:text-primary/30 transition-colors">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="font-headline-lg text-lg md:text-xl group-hover:text-primary transition-colors">
                        {label}
                      </span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Carousel slider */}
              <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-margin-mobile px-margin-mobile no-scrollbar">
                {features.map(({ icon, label, image }, index) => (
                  <div
                    key={label}
                    className="snap-start shrink-0 w-[82%] aspect-[4/5] rounded-2xl overflow-hidden relative border border-outline-variant/20 shadow-xl"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="material-symbols-outlined text-primary text-4xl bg-black/40 backdrop-blur-md p-2 rounded-full">
                          {icon}
                        </span>
                        <span className="text-white/40 font-mono text-lg bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                          0{index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-headline-lg text-xl text-white font-bold leading-tight drop-shadow-sm">
                          {label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
