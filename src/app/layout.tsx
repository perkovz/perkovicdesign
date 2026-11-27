import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { META, OG_IMAGE, SITE_NAME, SITE_URL } from "@/content/site";
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
  metadataBase: new URL(SITE_URL),
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.title,
    description: META.description,
    url: "/",
    siteName: SITE_NAME,
    images: [OG_IMAGE],
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
