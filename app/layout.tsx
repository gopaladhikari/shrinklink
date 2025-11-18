import type { Metadata } from "next";
import { Providers } from "./providers";
import { Menu } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ShrinkLink - Shorten Your URLs",
    template: "%s | ShrinkLink",
  },
  description:
    "A fast, minimal URL shortener. Shorten long links in seconds and track clicks.",
  keywords:
    "url shortener, link shortener, shorten url, bitly alternative, nextjs project",
  authors: [{ name: "ShrinkLink" }],
  creator: "ShrinkLink",
  publisher: "ShrinkLink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "ShrinkLink - Shorten Your URLs",
    description: "Shorten, share, and track your links with ShrinkLink.",
    url: "https://shrinklink-orcin.vercel.app",
    siteName: "ShrinkLink",
    images: [
      {
        url: "https://shrinklink-orcin.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShrinkLink - URL Shortener",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ShrinkLink - Shorten Your URLs",
    description: "A minimal, fast URL shortener built with Next.js.",
    images: ["https://shrinklink-orcin.vercel.app/og-image.jpg"],
    creator: "@gopuadks",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Manifest (PWA support - optional)
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <Providers>
          <Menu />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
