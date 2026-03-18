import { getRequestConfig } from "next-intl/server";
import { routing } from "../routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "pl" | "en" | "de" | "es")) {
    locale = routing.defaultLocale;
  }

  const messages = await (async () => {
    switch (locale) {
      case "en": return (await import("../../messages/en.json")).default;
      case "de": return (await import("../../messages/de.json")).default;
      case "es": return (await import("../../messages/es.json")).default;
      default:   return (await import("../../messages/pl.json")).default;
    }
  })();

  return { locale, messages };
});
