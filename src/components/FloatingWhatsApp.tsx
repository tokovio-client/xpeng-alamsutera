import { StoreInfo } from "@/lib/tokovio";

interface FloatingWhatsAppProps {
  store?: StoreInfo | null;
}

export default function FloatingWhatsApp({ store }: FloatingWhatsAppProps) {
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

  const message = "Hi, I'd like to ask about XPENG electric vehicles at Alam Sutera.";
  return (
    <a
      href={`https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with XPENG Alam Sutera on WhatsApp"
      className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://img.magnific.com/premium-vector/vector-whatsapp-social-media-logo_1093524-447.jpg?semt=ais_hybrid&w=740&q=80"
        alt="WhatsApp Logo"
        className="w-full h-full object-cover"
      />
    </a>
  );
}
