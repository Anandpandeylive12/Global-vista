import { siteConfig } from "@/lib/metadata";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}