import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

export default function Hero() {
  return (
    <ScrollAnimator>
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd83-GHPx3VYJfauIk_VYGI10Uclnnd1h-hrHfHgdQCuNvYw-3ijF2rpGE2GTujCF_2FHdU1ht_wlMZBkg8BSioyh8Nlhn2GoV2FbHoYNox0PQi6R1p7akCyL6ynX-pldT3cC4pELvHyfxLZZosTaPJXEF8hNtpIQFr3RZyyEMkt37c5FbSH1Em5Egdyjzb7HKUZKD3GP3ODbf6Dt93MVw75uBs_4PEJZrpd8P5ve_PEIQZ3YBK8eGQ0R7a5lezqoQq-J-e_t6e8A"
            alt="XPENG X9 – cinematic dark shot at dusk with cyan LED light bar"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 px-margin-desktop w-full max-w-container-max mx-auto">
          <div className="max-w-2xl space-y-8">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-primary font-label-caps text-label-caps">
              NOW AVAILABLE IN ALAM SUTERA
            </span>

            <h1 className="font-display-lg text-display-lg text-white">
              XPENG X9:
              <br />
              <span className="text-primary">Intelligent Living</span>
            </h1>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              The ultimate flagship MPV built on the SEPA 2.0 architecture.
              Experience the fusion of high-performance tech and silent luxury.
            </p>

            <div className="flex gap-6 pt-4">
              <button className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps hover:shadow-[0_0_20px_rgba(195,245,255,0.3)] transition-all">
                EXPLORE X9
              </button>
              <button className="border border-white/30 text-white px-10 py-4 font-label-caps text-label-caps hover:bg-white/5 transition-all">
                BOOK TEST DRIVE
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
          <span className="font-label-caps text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>
    </ScrollAnimator>
  );
}
