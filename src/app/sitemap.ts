/**
 * Generates a sitemap for the BMI Buddy application.
 * This file follows Next.js App Router conventions to automatically
 * generate a sitemap.xml file at build time.
 *
 * The sitemap includes:
 * - Homepage (/)
 * - Privacy Policy (/privacy)
 *
 * Each URL includes:
 * - Last modified date (current date)
 * - Change frequency (monthly/yearly)
 * - Priority (1.0/0.8)
 *
 * @returns {MetadataRoute.Sitemap} Array of sitemap entries for the application
 */
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
