import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.bmibuddy.kz"
      : "http://localhost:3000";

  const routes = ["", "/privacy"];

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ? "monthly" : ("yearly" as "monthly" | "yearly"),
    priority: route === "" ? 1 : 0.8,
  }));

  return sitemap;
}
