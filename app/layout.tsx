import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Caveat } from "next/font/google";
import "./globals.css";

// Characterful modern grotesque for display headings — bold, award-worthy.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Clean grotesque for UI, labels and body copy.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Handwritten font for playful accents, stickers and scribbles.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Update this to your real domain when you deploy.
  metadataBase: new URL("https://fubbes.com"),
  title: {
    default: "Fubbes · Web & App Studio",
    template: "%s · Fubbes",
  },
  description:
    "Fubbes is a small studio building websites and mobile apps for ambitious brands. Full-stack web, Flutter apps, product design and backend engineering.",
  keywords: [
    "web development",
    "app development",
    "Flutter",
    "Next.js",
    "UI UX design",
    "web studio",
    "India",
  ],
  openGraph: {
    title: "Fubbes · Web & App Studio",
    description:
      "Two developers building websites and mobile apps people actually love. Web, mobile, design and backend, start to finish.",
    type: "website",
    siteName: "Fubbes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fubbes · Web & App Studio",
    description:
      "Two developers building websites and mobile apps people actually love.",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

import { Preloader } from "@/components/preloader";
import { SmoothScroller } from "@/components/smooth-scroller";
import PageTransition from "@/components/page-transition";
import ClickSpark from "@/components/reactbits/click-spark";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${inter.variable} ${caveat.variable} antialiased bg-paper text-ink`}
      >
        <Preloader />
        <ClickSpark sparkColor="#0d0d0d" sparkCount={10} sparkRadius={22} duration={520} />
        <SmoothScroller>
          <PageTransition>{children}</PageTransition>
        </SmoothScroller>
      </body>
    </html>
  );
}
