import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

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
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container antialiased">
        {children}
      </body>
    </html>
  );
}
