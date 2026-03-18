import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/routing";
import JsonLd from "@/components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const baseUrl = "https://krystianmadry.pl";

// Unique, locale-specific descriptions for title + meta
const localeDescriptions: Record<string, string> = {
  pl: "Senior Frontend Engineer, CTO i builder. Tworzę software, produkty, doświadczenia i fizyczne formy — systemowo, bez zbędnego chaosu.",
  en: "Senior Frontend Engineer, CTO and builder. I create software, products, experiences and physical forms — systematically, without unnecessary chaos.",
  de: "Senior Frontend Engineer, CTO und Builder. Ich baue Software, Produkte, Erlebnisse und physische Formen — systematisch, ohne unnötiges Chaos.",
  es: "Senior Frontend Engineer, CTO y builder. Creo software, productos, experiencias y formas físicas — de forma sistemática, sin caos innecesario.",
};

const ogTitles: Record<string, string> = {
  pl: "Krystian Mądry — Senior Frontend Engineer & CTO",
  en: "Krystian Mądry — Senior Frontend Engineer & CTO",
  de: "Krystian Mądry — Senior Frontend Engineer & CTO",
  es: "Krystian Mądry — Senior Frontend Engineer & CTO",
};

// Prerender all locale home pages at build time
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const canonicalUrl =
    locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;

  // hreflang alternates for all locales + x-default pointing to default locale
  const languages: Record<string, string> = { "x-default": baseUrl };
  for (const l of routing.locales) {
    languages[l] = l === routing.defaultLocale ? baseUrl : `${baseUrl}/${l}`;
  }

  const ogLocale =
    locale === "pl" ? "pl_PL" :
    locale === "en" ? "en_US" :
    locale === "de" ? "de_DE" : "es_ES";

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
      locale: ogLocale,
      url: canonicalUrl,
      siteName: "Krystian Mądry",
      title: ogTitles[locale] ?? ogTitles.pl,
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
      title: ogTitles[locale] ?? ogTitles.pl,
      description: localeDescriptions[locale] ?? localeDescriptions.pl,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
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

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased">
        <JsonLd locale={locale} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
