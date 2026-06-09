"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimator({
  children,
  className = "",
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("scroll-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("scroll-hidden");
          entry.target.classList.add("scroll-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
