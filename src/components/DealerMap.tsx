import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

const hours = [
  { day: "Monday - Friday", time: "08:00 - 18:00", highlight: false },
  { day: "Saturday", time: "09:00 - 16:00", highlight: false },
  { day: "Sunday", time: "By Appointment", highlight: true },
];

export default function DealerMap() {
  return (
    <ScrollAnimator>
      <section id="contact" className="scroll-mt-24 py-40 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-16 text-center">
            VISIT OUR DEALER NOW
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 glass-card overflow-hidden">
            {/* Map image – 2/3 width */}
            <div className="lg:col-span-2 relative h-[500px]">
              <div className="absolute inset-0 grayscale contrast-125 opacity-70">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ju0tN-gPq3mODqtmyhxmlyV3lC6CRb63PZs-1SeFXMPgpTb1YqVugQvBg0tONeNusHBoh_7lS4sS0BSxjdJlfoV6a9EipFVuhj6sMEES6KAuBJu2A8JO3qgiSbLqgquP8FrIgUz6mvBGCIGfAooZS6H5O4HtMrmjXKLkClqsIN4QgEvQyEjOOTcmQBuWfN-HW_wonOEWtnhti1LhkMQOpHbvPTGPCbQ8wU2q4P-KwipHt0Ad7Z3u-OQ8X9podfjDwOnZ9A10oGo"
                  alt="Dark mode map of Alam Sutera Tangerang area with XPENG dealer pin"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent z-10" />
              {/* Animated location pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute" />
                <div className="w-8 h-8 bg-primary rounded-full relative flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-on-primary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
              </div>
            </div>

            {/* Info panel – 1/3 width */}
            <div className="p-12 space-y-10 flex flex-col justify-center">
              <div>
                <span className="font-label-caps text-xs text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">
                    my_location
                  </span>
                  OUR LOCATION
                </span>
                <h3 className="font-headline-lg text-3xl mb-4">
                  XPENG Alam Sutera
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Jl. Jalur Sutera Blok Kav No. ...
                  <br />
                  Pakualam, Kec. Serpong Utara,
                  <br />
                  Kota Tangerang Selatan, Banten 15320
                </p>
              </div>

              {/* Business hours */}
              <div className="space-y-4">
                {hours.map(({ day, time, highlight }) => (
                  <div
                    key={day}
                    className={`flex justify-between font-label-caps text-label-caps ${
                      highlight ? "" : "border-b border-outline-variant/30 pb-2"
                    }`}
                  >
                    <span className="text-on-surface-variant">{day}</span>
                    <span className={highlight ? "text-primary" : ""}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?q=XPENG+Alam+Sutera+Tangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-white/30 py-4 font-label-caps text-label-caps hover:bg-white/5 transition-all text-center block"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
