import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { RevealObserver } from "@/components/RevealObserver";
import { OrgSchema } from "@/components/Schema";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Roofing, Siding, Windows & Remodeling | ${site.name}, Akron PA`,
    template: `%s | ${site.name}`,
  },
  description:
    "Fox Gables Construction is an owner-operated, PA-licensed contractor in Akron serving Lancaster and Lebanon counties. Roofing, siding, windows, doors, decks and remodeling. Free estimates.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSerif.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Script id="js-anim" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js-anim')"}
        </Script>
        <Header />
        <main id="main" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <RevealObserver />
        <OrgSchema />
      </body>
    </html>
  );
}
