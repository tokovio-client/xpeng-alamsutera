"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
          ? "scrolled-nav"
          : "bg-surface/10 backdrop-blur-xl dark:bg-surface-dim/20"
      }`}
    >
      <div className="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <div className="font-headline-lg text-headline-lg tracking-tighter text-on-surface dark:text-on-background">
          XPENG
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["G6", "X9", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-300 font-label-caps text-label-caps"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-primary px-8 py-3 rounded-DEFAULT text-on-primary font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-all active:scale-95">
          Book Test Drive
        </button>
      </div>
    </nav>
  );
}
