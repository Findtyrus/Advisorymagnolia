import type { MetadataRoute } from "next";

const baseUrl = "https://magnoliaadvisory.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/bookkeeping",
    "/services/cfo",
    "/services/ma-advisory",
    "/pricing",
    "/bundle",
    "/about",
    "/team",
    "/how-it-works",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
