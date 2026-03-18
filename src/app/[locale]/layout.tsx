import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/routing";

const baseUrl = "https://krystianmadry.pl";

const localeDescriptions: Record<string, string> = {
  pl: "Senior Frontend Engineer, CTO i builder. Tworzę software, produkty, doświadczenia i fizyczne formy — systemowo, bez zbędnego chaosu.",
  en: "Senior Frontend Engineer, CTO and builder. I create software, products, experiences and physical forms — systematically, without unnecessary chaos.",
  de: "Senior Frontend Engineer, CTO und Builder. Ich baue Software, Produkte, Erlebnisse und physische Formen — systematisch, ohne unnötiges Chaos.",
  es: "Senior Frontend Engineer, CTO y builder. Creo software, productos, experiencias y formas físicas — de forma sistemática, sin caos innecesario.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const alternates: Record<string, string> = {};
  for (const l of routing.locales) {
    alternates[l] = l === routing.defaultLocale ? baseUrl : `${baseUrl}/${l}`;
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Krystian Mądry",
      template: "%s — Krystian Mądry",
    },
    description: localeDescriptions[locale] ?? localeDescriptions.pl,
    authors: [{ name: "Krystian Mądry" }],
    creator: "Krystian Mądry",
    openGraph: {
      type: "website",
      locale: locale === "pl" ? "pl_PL" : locale === "en" ? "en_US" : locale === "de" ? "de_DE" : "es_ES",
      url: locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`,
      siteName: "Krystian Mądry",
      title: "Krystian Mądry",
      description: localeDescriptions[locale] ?? localeDescriptions.pl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Krystian Mądry — Software · Produkty · Forma",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Krystian Mądry",
      description: localeDescriptions[locale] ?? localeDescriptions.pl,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`,
      languages: alternates,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pl" | "en" | "de" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
