import type { MetadataRoute } from "next";
import { products } from "./data/products";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/story", "/products", "/reviews", "/faq", "/contact", "/privacy"];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
    })),
  ];
}
