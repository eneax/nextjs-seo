import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*", // all crawlers
        allow: "/", // allow all pages
        disallow: ["/api/"], // disallow specific pages
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/terms-and-conditions/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
