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
  metadataBase: new URL("https://www.xpeng-alamsutera.id"),
  title: "XPENG ALAM SUTERA - JEREMY – Official XPENG Consultant",
  description:
    "Official XPENG electric vehicle consultant in Alam Sutera, Tangerang. Get exclusive promo, price list, and book a test drive for XPENG G6 & X9.",
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
    title: "XPENG ALAM SUTERA - JEREMY",
    description:
      "Dealer Resmi Mobil Listrik Xpeng di Alam Sutera. Dapatkan Promo, Harga Terbaru, & Booking Test Drive G6 & X9 Sekarang!",
    url: "/",
    siteName: "XPENG Alam Sutera",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "XPENG Alam Sutera Sales Consultant - Jeremy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "XPENG ALAM SUTERA - JEREMY",
    description:
      "Dealer Resmi Mobil Listrik Xpeng di Alam Sutera. Dapatkan Promo, Harga Terbaru, & Booking Test Drive G6 & X9 Sekarang!",
    images: ["/og-image.png"],
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
