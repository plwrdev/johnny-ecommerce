import { MetadataRoute } from "next";

const baseUrl = "https://uuu.vip";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/merch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
