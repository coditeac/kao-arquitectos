import type { Metadata } from "next";
import type { CSSProperties } from "react";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/content";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html
      lang="es-MX"
      className={`${switzer.variable} h-full`}
      style={
        {
          "--font-display": "var(--font-sans)",
        } as CSSProperties
      }
    >
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
