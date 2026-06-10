import ScrollAnimator from "./ScrollAnimator";

const features = [
  { icon: "electric_car", label: "The Future of Driving" },
  { icon: "bolt", label: "Ultra-Fast Charging" },
  { icon: "devices", label: "Connected Living" },
  { icon: "weekend", label: "First Class Comfort" },
  { icon: "memory", label: "Advanced Intelligence" },
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
                See it, feel it, for best experience
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

            {/* Right column – feature cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
