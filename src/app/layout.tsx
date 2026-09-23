import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/content";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  keywords: [
    "arquitectos Oaxaca",
    "estudio de arquitectura Oaxaca",
    "arquitectura residencial Oaxaca",
    "diseño de interiores Oaxaca",
    "KAO Arquitectos",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "architecture",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html lang="es-MX" className={`${sora.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
