import type { MetadataRoute } from "next";

const BASE_URL = "https://kinder-apps.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/kinder`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/moment`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/birthflow`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/petnames`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), priority: 0.5 },
    { url: `${BASE_URL}/kinder/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${BASE_URL}/moment/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${BASE_URL}/birthflow/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${BASE_URL}/petnames/privacy`, lastModified: new Date(), priority: 0.3 },
  ];
}
