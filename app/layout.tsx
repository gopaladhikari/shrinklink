import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { site } from "@/constants";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    absolute: `%s - ShrinkLink`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  keywords: site.keywords,
  creator: site.author.name,
  publisher: site.author.name,
  applicationName: site.name,
  authors: [site.author],

  alternates: {
    canonical: site.url,
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: site.name,
    siteName: site.name,
    type: "website",
    url: site.url,
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    site: site.url,
    description: site.description,
    creator: site.author.name,
  },
};

export const viewport: Viewport = {
  height: "device-height",
  width: "device-width",
  viewportFit: "auto",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <main className="min-h-svh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
