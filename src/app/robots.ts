/**
 * Generates a robots.txt file for the BMI Buddy application.
 * This file follows Next.js App Router conventions to automatically
 * generate a robots.txt file at build time.
 *
 * Features:
 * - Allows all user agents to crawl the site
 * - Points search engines to the sitemap.xml location
 * - Uses environment-aware base URL configuration
 *
 * @returns {MetadataRoute.Robots} Robots directive configuration
 */
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.bmibuddy.kz"
      : "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
