import type { MetadataRoute } from "next";
import { routing } from "@/routing";
import { areas } from "@/lib/areas";

const baseUrl = "https://krystianmadry.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home pages per locale
  for (const locale of routing.locales) {
    const url = locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
  }

  // Area subpages per locale
  for (const locale of routing.locales) {
    for (const area of areas) {
      const url =
        locale === routing.defaultLocale
          ? `${baseUrl}/obszary/${area.id}`
          : `${baseUrl}/${locale}/obszary/${area.id}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
