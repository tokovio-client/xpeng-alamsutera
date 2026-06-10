import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";
import { StoreInfo } from "@/lib/tokovio";

interface SpecialistProps {
  store?: StoreInfo | null;
}

export default function Specialist({ store }: SpecialistProps) {
  let rawPhone = "6287770189135";
  let displayPhone = "0877-7018-9135";
  if (store?.payment_config) {
    try {
      const config = JSON.parse(store.payment_config);
      if (config.phone) {
        const cleaned = config.phone.replace(/^[+0]/, "").trim();
        rawPhone = cleaned.startsWith("62") ? cleaned : "62" + cleaned;
        
        const localNum = cleaned.startsWith("62") ? "0" + cleaned.slice(2) : "0" + cleaned;
        displayPhone = localNum.replace(/(\d{4})(\d{4})(\d{4,})/, "$1-$2-$3");
      }
    } catch {}
  }

  let instagramHandle = "xpengserpong.id";
  let instagramLink = "https://instagram.com/xpengserpong.id";
  if (store?.theme_config) {
    try {
      const parsed = JSON.parse(store.theme_config);
      if (parsed.footer?.socialLinks?.instagram) {
        instagramLink = parsed.footer.socialLinks.instagram;
        instagramHandle = instagramLink.replace(/\/$/, "").split("/").pop() || "xpengserpong.id";
      }
    } catch {}
  }

  const contacts = [
    {
      icon: "chat",
      label: "WHATSAPP",
      value: displayPhone,
      href: `https://wa.me/${rawPhone}`,
    },
    {
      icon: "photo_camera",
      label: "INSTAGRAM",
      value: instagramHandle,
      href: instagramLink,
    },
    {
      icon: "location_on",
      label: "LOCATION",
      value: store?.name || "XPENG Alam Sutera",
      href: "#dealer-map",
    },
  ];

  return (
    <ScrollAnimator>
      <section className="py-20 md:py-40 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left – portrait + quote card */}
            <div className="relative mb-8 lg:mb-0">
              <div className="aspect-square bg-surface-container-high rounded-full overflow-hidden border-4 border-primary/20 relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArA0VG4-hN88Q8ODeAL9pqU282xD8ln-UrmXgfhrKftHKxCQd43DXkCeHeONvEubv_3XvNKIyTCVFwzP3gdc3NTaIEKnB2Myvfq8yLMLlo7jzksCcfNLzTmgpQBXIW1rE3u6BUM06p5N8YU_MBObn20wcr6RS-1EVqT5K8cVA1AEGBFl8KTYVa4VdmvPUNvXJ6Z1ufniWXMLc52zYsEGLWh-SrWYdakSMTm5GQ2qmr-Hl27atbC7ksk_Psc1GZaQsRkprDYQSwxJE"
                  alt="Jeremy – Official XPENG Consultant at Alam Sutera showroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              {/* Quote overlay card */}
              <div className="absolute -bottom-6 right-0 md:-bottom-10 md:-right-10 glass-card p-4 md:p-8 rounded-lg max-w-[260px] md:max-w-xs">
                <p className="text-xs md:text-body-md text-on-surface-variant italic mb-3 md:mb-4">
                  &ldquo;Delivering a premium and personalized electric vehicle
                  ownership experience at XPENG Alam Sutera.&rdquo;
                </p>
                <p className="font-headline-lg text-sm md:text-lg">JEREMY</p>
                <p className="font-label-caps text-[10px] md:text-xs text-primary">
                  OFFICIAL XPENG CONSULTANT
                </p>
              </div>
            </div>

            {/* Right – bio + contact grid */}
            <div className="space-y-12">
              <div>
                <span className="font-label-caps text-label-caps text-outline mb-4 block">
                  HELLO, I&rsquo;M JEREMY
                </span>
                <h2 className="font-headline-lg text-4xl md:text-headline-lg mb-6 leading-tight">
                  XPENG CONSULTANT
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contacts.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-6 glass-card hover:bg-primary/10 group"
                  >
                    <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center group-hover:bg-primary transition-colors overflow-hidden">
                      {icon === "chat" ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="https://img.magnific.com/premium-vector/vector-whatsapp-social-media-logo_1093524-447.jpg?semt=ais_hybrid&w=740&q=80"
                          alt="WhatsApp"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
                          {icon}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] text-outline">
                        {label}
                      </p>
                      <p className="font-label-caps text-label-caps">{value}</p>
                    </div>
                  </a>
                ))}

                <a
                  href={`https://wa.me/${rawPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary p-6 font-label-caps text-label-caps flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(195,245,255,0.3)] transition-all"
                >
                  CHAT WITH ME{" "}
                  <span className="material-symbols-outlined">send</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
