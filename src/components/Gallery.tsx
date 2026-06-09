import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuLFLRpoTw9QUjZbHNzYBjlxxYVCg02-NpKF0s_k4F4mI5HTCJWm4Q4dnNQNn_AfB3boYB2HjAon9yYciJKcO_2gBcMANJco8VW0r35srhownIBRrc9miIwRemljfw5eXtgO2iVApM5ciBT-LJUb90JKJKaU8hvgzh4iM8AXGiSfcaMlQmYNGeg3lPOVfZ-6uWd7VYjNdle0Zn3FA5CWSl82dy1sJK2w4Lp1QVI2FEtoyA5lQn2T5u0c-hhYE6P848Zp5rB3OrR8",
    alt: "Professional man in black suit entering XPENG X9 outside glass skyscraper",
    width: "min-w-[400px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJz4Sq42iPyZ_DxfntUhlwUYcNHduY_20SiBDlOe1RsvupEMr5hUQyAyxmG8z8OXikKQiQTOZVR0pr3PuTSGb0CfdD_wyz10JJr_fddHWpFjZ_dQnXmNj9rnM-kko209ebXk1u6nFSoTJsenboZxzpiY5l6sAAi4ioDFELsPbGPFLdwELi7pTiyRwBIUgvXIR8oWgvBqVttZ9YV5R8x_GiEf_vteEoB_TqvUhQLTY_H4i-GYXm5sCeroRw2dk1wSvY9VtrlNkr6kY",
    alt: "XPENG driving on winding coastal road at sunset",
    width: "min-w-[600px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADgkIK6m15ex-Xa7FFOWquOIk9MqF0OE58OJqTneeCE4CpEgN0d36XkwKXnpMX1o-CsWanPmnkA-tER-V4DYwyZgvqom0Y5bVfGfTTX0ZJQLhOeJMJyHlOxp-N7sGvlVjHSz3vRkdjLoMLUcKBTmCnsir2nNAheUCaPruVrzITFSSIg3YoSy3T9uz2F6793TS7COEat7xrSe425mrMTDV4BfDnRyDNpc7WrBRe1XmZ-hZG_gmpL8bPD294nguFSLYulPnOY1ARJOc",
    alt: "XPENG logo macro detail with rain beads on metallic surface",
    width: "min-w-[400px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWWPxQUA9pMxQ0JfWqqdWilCNUfIONn5xzzibhuYp7XtlxcKXrX2lRjBY9Vm0WFUEK9Tak3PIb6cuYF_gYRfrvDvsAfnLmM1V90tYVchvO4WpajWfPYsNTuOyEpQqKIs-_JnY5gBdTHa0BJE2IgnwlStI0JnjLVYA4CXtbPGbT9YiDG1NFXhOz-O9XXPjKO4WywFj-U2WOCU9-KAlLdgzyphI72VU3vZDrp7dJEWLQroAZwMNhdYd5sZM7keU7UhTUgwr9hA4-NiI",
    alt: "XPENG dashboard at night with cyan navigation UI display",
    width: "min-w-[500px]",
  },
];

export default function Gallery() {
  return (
    <ScrollAnimator>
      <section className="py-40 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop mb-20 text-center">
          <span className="font-label-caps text-label-caps text-outline mb-4 block">
            SHOWROOM &amp; MOMENTS
          </span>
          <h2 className="font-headline-lg text-headline-lg">GALLERY</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar px-10">
          {galleryImages.map(({ src, alt, width }) => (
            <div
              key={alt}
              className={`${width} h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimator>
  );
}
