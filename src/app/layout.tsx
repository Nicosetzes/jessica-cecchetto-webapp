import "./globals.css";
import { CookieBanner } from "@/views/components/ui";
import { CookieProvider } from "@/context";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import { PageWrapper } from "@/views/components/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsWrapper, Footer, Navbar } from "@/views/components/layout";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  description:
    "Evidence-based psychotherapy in Copenhagen, including individual therapy, group therapy and gender-affirming counselling.",
  icons: {
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.therapywithjesica.dk"),
  openGraph: {
    description:
      "Evidence-based psychotherapy in Copenhagen, including individual therapy, group therapy and gender-affirming counselling.",
    images: [
      {
        alt: "Jesica Cecchetto — Psychotherapy in Copenhagen",
        height: 623,
        url: "/images/jesica-opengraph.jpg",
        width: 1200,
      },
    ],
    locale: "en_DK",
    siteName: "Jesica Cecchetto",
    title: "Jesica Cecchetto | Psychotherapy in Copenhagen",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Psychotherapy in Copenhagen | Jesica Cecchetto",
    template: "%s | Jesica Cecchetto",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Evidence-based psychotherapy in Copenhagen, including individual therapy, group therapy and gender-affirming counselling.",
    images: ["/images/jesica-opengraph.jpg"],
    title: "Jesica Cecchetto | Psychotherapy in Copenhagen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <CookieProvider>
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
          <CookieBanner />
          <AnalyticsWrapper />
        </CookieProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
