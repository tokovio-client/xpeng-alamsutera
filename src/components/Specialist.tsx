import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

const contacts = [
  {
    icon: "chat",
    label: "WHATSAPP",
    value: "082111155128",
    href: "https://wa.me/6282111155128",
  },
  {
    icon: "photo_camera",
    label: "INSTAGRAM",
    value: "xpengindonesia.official",
    href: "https://instagram.com/xpengindonesia.official",
  },
  {
    icon: "location_on",
    label: "LOCATION",
    value: "XPENG Alam Sutera",
    href: "#dealer-map",
  },
];

export default function Specialist() {
  return (
    <ScrollAnimator>
      <section className="py-40 bg-background">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left – portrait + quote card */}
            <div className="relative">
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
              <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-lg max-w-xs">
                <p className="font-body-md text-on-surface-variant italic mb-4">
                  &ldquo;Delivering a premium and personalized electric vehicle
                  ownership experience at XPENG Alam Sutera.&rdquo;
                </p>
                <p className="font-headline-lg text-lg">JEREMY</p>
                <p className="font-label-caps text-xs text-primary">
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
                <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">
                  YOUR XPENG
                  <br />
                  SPECIALIST
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contacts.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-6 glass-card hover:bg-primary/10 group"
                  >
                    <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
                        {icon}
                      </span>
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
                  href="https://wa.me/6282111155128"
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
