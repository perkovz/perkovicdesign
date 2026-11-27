import type { MetadataRoute } from "next";
import { PRIVACY_HREF, SITE_URL, SLOTWISE_HREF } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${SLOTWISE_HREF}`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${PRIVACY_HREF}`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
