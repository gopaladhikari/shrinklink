import type { Metadata } from "next";
import { Providers } from "./providers";
import { Menu } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: "%s | ShrinkLink",
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
  creator: site.author,
  publisher: site.author,

  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [`${site.url}/og-image.jpg`],
    creator: site.author,
  },

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
