import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BASE_URL = "https://atilganglobalcatering.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atilgan Global Catering",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  sameAs: [
    "https://www.instagram.com/atilganglobalcatering",
    "https://www.facebook.com/atilganglobalcatering",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
    addressLocality: "İstanbul",
    streetAddress: "Başakşehir",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-532-000-0000",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["tr", "en"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Atilgan Global Catering | Şantiye Yemek Hizmetleri",
    template: "%s | Atilgan Global Catering",
  },
  description:
    "Atilgan Global, şantiyeler ve kurumsal projeler için hijyenik, sürdürülebilir ve profesyonel yemek hizmetleri sunar.",
  keywords: [
    "catering",
    "şantiye yemek",
    "toplu yemek",
    "atilgan global",
    "endüstriyel yemek",
  ],
  authors: [
    { name: "Atilgan Global" },
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    title: "Atilgan Global Catering | Şantiye Yemek Hizmetleri",
    description:
      "Türkiye genelinde şantiyelere özel hijyenik ve sürdürülebilir toplu yemek hizmetleri.",
    siteName: "Atilgan Global Catering",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Atilgan Global Catering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atilgan Global Catering",
    description:
      "Şantiyelere özel hijyenik ve sürdürülebilir toplu yemek hizmetleri.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
