"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";
import { StoreInfo } from "@/lib/tokovio";

interface HeroProps {
  store?: StoreInfo | null;
}

export default function Hero({ store }: HeroProps) {
  const themeConfig = store?.theme_config;

  const heroConfig = useMemo(() => {
    if (!themeConfig) return null;
    try {
      const parsed = JSON.parse(themeConfig);
      return parsed.hero || null;
    } catch {
      return null;
    }
  }, [themeConfig]);

  const title = heroConfig?.title || "XPENG :\nIntelligent Living";
  const titleParts = title.split("\n");
  const subtitle = heroConfig?.subtitle || "The ultimate flagship MPV built on the SEPA 2.0 architecture. Experience the fusion of high-performance tech and silent luxury.";

  let rawPhone = "6287770189135";
  if (store?.payment_config) {
    try {
      const config = JSON.parse(store.payment_config);
      if (config.phone) {
        const cleaned = config.phone.replace(/^[+0]/, "").trim();
        rawPhone = cleaned.startsWith("62") ? cleaned : "62" + cleaned;
      }
    } catch {}
  }

  const message = "Hi, I'd like to book a test drive for an XPENG electric vehicle at Alam Sutera.";
  const waLink = `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`;
  
  // Resolve backgroundImages (accept array or fallback to single string)
  const backgroundImages = useMemo<string[]>(() => {
    if (Array.isArray(heroConfig?.backgroundImages)) {
      return heroConfig.backgroundImages;
    } else if (heroConfig?.backgroundImage) {
      return [heroConfig.backgroundImage];
    } else {
      return [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAd83-GHPx3VYJfauIk_VYGI10Uclnnd1h-hrHfHgdQCuNvYw-3ijF2rpGE2GTujCF_2FHdU1ht_wlMZBkg8BSioyh8Nlhn2GoV2FbHoYNox0PQi6R1p7akCyL6ynX-pldT3cC4pELvHyfxLZZosTaPJXEF8hNtpIQFr3RZyyEMkt37c5FbSH1Em5Egdyjzb7HKUZKD3GP3ODbf6Dt93MVw75uBs_4PEJZrpd8P5ve_PEIQZ3YBK8eGQ0R7a5lezqoQq-J-e_t6e8A"
      ];
    }
  }, [heroConfig]);

  const primaryButtonText = heroConfig?.primaryButtonText || "EXPLORE X9";
  const secondaryButtonText = heroConfig?.secondaryButtonText || "BOOK TEST DRIVE";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <ScrollAnimator>
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
          {backgroundImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`XPENG Hero Image ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover animate-fade-in"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
          <div className="max-w-2xl space-y-8">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-primary font-label-caps text-label-caps">
              NOW AVAILABLE IN ALAM SUTERA
            </span>

            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg text-white leading-tight">
              {titleParts[0]}
              {titleParts.length > 1 && (
                <>
                  <br />
                  <span className="text-primary">{titleParts.slice(1).join(" ")}</span>
                </>
              )}
            </h1>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {subtitle}
            </p>

            <div className="flex flex-row gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#models"
                className="flex-1 bg-primary text-on-primary px-4 py-3 md:px-10 md:py-4 font-label-caps text-[10px] md:text-label-caps hover:shadow-[0_0_20px_rgba(195,245,255,0.3)] transition-all block text-center whitespace-nowrap"
              >
                {primaryButtonText}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/30 text-white px-4 py-3 md:px-10 md:py-4 font-label-caps text-[10px] md:text-label-caps hover:bg-white/5 transition-all block text-center whitespace-nowrap"
              >
                {secondaryButtonText}
              </a>
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
