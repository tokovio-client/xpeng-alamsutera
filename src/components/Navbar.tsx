"use client";

import { useEffect, useState } from "react";
import { StoreInfo } from "@/lib/tokovio";

interface NavbarProps {
  store?: StoreInfo | null;
}

export default function Navbar({ store }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/10 dark:border-outline-variant/30 ${
        scrolled || menuOpen
          ? "scrolled-nav"
          : "bg-surface/10 backdrop-blur-xl dark:bg-surface-dim/20"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3 font-headline-lg text-headline-lg tracking-tighter text-on-surface dark:text-on-background flex-shrink-0">
          {store?.logo_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={store.logo_url}
              alt="Store Logo"
              className="w-8 h-8 object-cover rounded-full border border-white/10"
            />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://xpeng.co.id/logo/xpeng-logo-white.svg"
            alt="XPENG Logo"
            className="h-5 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "G6", id: "#g6" },
            { label: "X9", id: "#x9" },
            { label: "Services", id: "#services" },
            { label: "Gallery", id: "#gallery" },
            { label: "Contact", id: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.id}
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-300 font-label-caps text-label-caps"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA (hidden on mobile) */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-primary px-8 py-3 rounded-DEFAULT text-on-primary font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-all active:scale-95 text-center whitespace-nowrap"
        >
          Book Test Drive
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-4 py-2 rounded-DEFAULT text-on-primary font-label-caps text-[10px] hover:bg-primary-fixed-dim transition-all active:scale-95 block text-center whitespace-nowrap"
          >
            Book Test Drive
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="w-10 h-10 flex items-center justify-center border border-white/20 text-on-surface hover:bg-white/5 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 flex flex-col p-6 gap-4 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {[
          { label: "G6", id: "#g6" },
          { label: "X9", id: "#x9" },
          { label: "Services", id: "#services" },
          { label: "Gallery", id: "#gallery" },
          { label: "Contact", id: "#contact" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.id}
            onClick={() => setMenuOpen(false)}
            className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 px-4 py-3 rounded-DEFAULT transition-all duration-300 font-label-caps text-label-caps text-left"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
