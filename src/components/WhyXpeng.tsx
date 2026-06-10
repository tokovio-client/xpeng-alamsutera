import ScrollAnimator from "./ScrollAnimator";

const features = [
  { icon: "bolt", label: "Fast Charging" },
  { icon: "memory", label: "Smart Technology" },
  { icon: "wifi", label: "Intelligent Connectivity" },
];

export default function WhyXpeng() {
  return (
    <ScrollAnimator>
      <section id="services" className="scroll-mt-24 py-40 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Left column */}
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8">
                WHY XPENG?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-lg">
                Designed for the future. Engineered for intelligent living.
                XPENG is redefining mobility through autonomous driving and
                smart cockpits.
              </p>
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-outline">
                  Xpeng Alam Sutera | Official Consultant
                </p>
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
            <div className="space-y-8">
              {features.map(({ icon, label }) => (
                <div
                  key={label}
                  className="group flex items-center justify-between p-8 glass-card"
                >
                  <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {icon}
                    </span>
                    <span className="font-headline-lg text-2xl group-hover:text-primary transition-colors">
                      {label}
                    </span>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
