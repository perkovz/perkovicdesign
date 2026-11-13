import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Perkovic Design Studio",
    short_name: "Perkovic",
    description:
      "AI that behaves beautifully. Prove your AI agent behaves before you ship it.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F2EA",
    theme_color: "#F6F2EA",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
