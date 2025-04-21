import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 
    process.env.NODE_ENV === "production"
      ? "https://www.bmibuddy.kz"
      : "http://localhost:3000";
      
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}