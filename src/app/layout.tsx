import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XPENG | Intelligent Living – Alam Sutera Official Dealer",
  description:
    "XPENG Alam Sutera – Your official XPENG electric vehicle dealer in Tangerang Selatan. Explore the G6 PRO, X9 PRO, and X9 PRO+. Book a test drive today.",
  keywords: [
    "XPENG",
    "Alam Sutera",
    "electric car",
    "EV",
    "X9",
    "G6",
    "test drive",
    "Tangerang",
  ],
  openGraph: {
    title: "XPENG | Intelligent Living – Alam Sutera",
    description:
      "Experience the fusion of high-performance tech and silent luxury. Book your XPENG test drive at Alam Sutera today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container antialiased">
        {children}
      </body>
    </html>
  );
}
