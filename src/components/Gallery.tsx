import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

const galleryImages = [
  {
    src: "https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/34e946d9b0334643bd635568b1cc6c94.jpg?x-oss-process=image%2Fresize%2Cw_1920%2Fquality%2Cq_80%2Finterlace%2C1",
    alt: "Professional man in black suit entering XPENG X9 outside glass skyscraper",
    width: "min-w-[400px]",
  },
  {
    src: "https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/b33ec948b93d404d9b1d84181c55cdd6.jpg?x-oss-process=image%2Fresize%2Cw_1920%2Fquality%2Cq_80%2Finterlace%2C1",
    alt: "XPENG driving on winding coastal road at sunset",
    width: "min-w-[600px]",
  },
  {
    src: "https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/2c0de1e035944f1895841b78e978d033.jpg?name=New+X9+PC-P2-1",
    alt: "XPENG logo macro detail with rain beads on metallic surface",
    width: "min-w-[400px]",
  },
  {
    src: "https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/a519b283b156449baafbf149cbef85be.jpg?name=New+X9+PC-P2-2",
    alt: "XPENG dashboard at night with cyan navigation UI display",
    width: "min-w-[500px]",
  },
];

export default function Gallery() {
  return (
    <ScrollAnimator>
      <section id="gallery" className="scroll-mt-24 py-20 md:py-40 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-10 md:mb-20 text-center">
          {/* <span className="font-label-caps text-label-caps text-outline mb-4 block">
            SHOWROOM &amp; MOMENTS
          </span> */}
          <h2 className="font-headline-lg text-4xl md:text-headline-lg">Explore XPENG</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar px-margin-mobile md:px-margin-desktop">
          {galleryImages.map(({ src, alt, width }) => {
            const responsiveWidth =
              width === "min-w-[400px]"
                ? "min-w-[280px] md:min-w-[400px]"
                : width === "min-w-[600px]"
                ? "min-w-[420px] md:min-w-[600px]"
                : width === "min-w-[500px]"
                ? "min-w-[350px] md:min-w-[500px]"
                : "min-w-[300px]";

            return (
              <div
                key={alt}
                className={`${responsiveWidth} h-[300px] md:h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            );
          })}
        </div>
      </section>
    </ScrollAnimator>
  );
}
