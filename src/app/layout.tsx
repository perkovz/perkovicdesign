import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Fraunces needs its optical-size axis to match the Figma headline widths, which
// next/font only allows on the variable file. The site still uses only weights 400 and 600.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  style: ["normal"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perkovicdesign.com"),
  title: "Perkovic Design Studio | AI that behaves beautifully",
  description:
    "Prove your AI agent behaves before you ship it. Behavior design, evals and a coded prototype from one senior product designer, at fixed prices.",
  openGraph: {
    title: "Perkovic Design Studio | AI that behaves beautifully",
    description: "Prove your AI agent behaves before you ship it. One senior designer, fixed prices.",
    url: "https://perkovicdesign.com",
    siteName: "Perkovic Design Studio",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 900, alt: "A ginkgo leaf and fern on soft ripples." }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F2EA",
};

// Marks JS as available before first paint, so scroll reveals only hide content when they can run.
const JS_FLAG = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
