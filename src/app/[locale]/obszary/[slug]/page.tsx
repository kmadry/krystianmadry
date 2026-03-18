import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { areas } from "@/lib/areas";
import { getAreaContent, type AreaContent, type ContentBlock } from "@/lib/content";
import StatusChip from "@/components/StatusChip";
import { routing } from "@/routing";

const baseUrl = "https://krystianmadry.pl";

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const area of areas) {
      params.push({ locale, slug: area.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "areas_data" });
  const area = areas.find((a) => a.id === slug);
  if (!area) return {};

  const title = t(`${slug}.title`);
  const description = t(`${slug}.description`);

  const canonicalUrl =
    locale === routing.defaultLocale
      ? `${baseUrl}/obszary/${slug}`
      : `${baseUrl}/${locale}/obszary/${slug}`;

  // hreflang for all locale variants of this area page + x-default
  const languages: Record<string, string> = {
    "x-default": `${baseUrl}/obszary/${slug}`,
  };
  for (const l of routing.locales) {
    languages[l] =
      l === routing.defaultLocale
        ? `${baseUrl}/obszary/${slug}`
        : `${baseUrl}/${l}/obszary/${slug}`;
  }

  const ogLocale =
    locale === "pl" ? "pl_PL" :
    locale === "en" ? "en_US" :
    locale === "de" ? "de_DE" : "es_ES";

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: canonicalUrl,
      siteName: "Krystian M\u0105dry",
      title: `${title} \u2014 Krystian M\u0105dry`,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${title} \u2014 Krystian M\u0105dry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} \u2014 Krystian M\u0105dry`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: { index: true, follow: true },
  };
}

// BreadcrumbList JSON-LD for area subpages
function BreadcrumbJsonLd({
  locale,
  slug,
  areaTitle,
}: {
  locale: string;
  slug: string;
  areaTitle: string;
}) {
  const homeUrl =
    locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
  const pageUrl =
    locale === routing.defaultLocale
      ? `${baseUrl}/obszary/${slug}`
      : `${baseUrl}/${locale}/obszary/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Krystian M\u0105dry",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: areaTitle,
        item: pageUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function Block({
  block,
  transitionLabels,
}: {
  block: ContentBlock;
  transitionLabels: { from: string; to: string };
}) {
  if (block.type === "text") {
    return (
      <div className="flex flex-col gap-4">
        {block.content.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-[1rem] leading-[1.8] font-light whitespace-pre-line"
            style={{ color: "#6B6560" }}
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="flex flex-col gap-3">
        {block.prefix && (
          <p className="text-[1rem] leading-[1.8] font-light" style={{ color: "#6B6560" }}>
            {block.prefix}
          </p>
        )}
        <ul className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="mt-[0.55em] w-1 h-1 rounded-full shrink-0"
                style={{ backgroundColor: "#8A7E6F" }}
                aria-hidden="true"
              />
              <span className="text-[1rem] leading-[1.8] font-light" style={{ color: "#6B6560" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "note") {
    return (
      <p
        className="text-[0.9375rem] leading-[1.75] font-light border-l-2 pl-4"
        style={{ color: "#8A7E6F", borderColor: "#DAD7D2" }}
      >
        {block.content}
      </p>
    );
  }

  if (block.type === "transition") {
    return (
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">
        <div className="flex-1 border border-dashed border-[#DAD7D2] p-5">
          <p className="text-[10px] tracking-[0.12em] uppercase font-medium mb-3" style={{ color: "#B8B4AE" }}>
            {transitionLabels.from}
          </p>
          <p className="text-[0.9375rem] leading-[1.7] font-light" style={{ color: "#8A7E6F" }}>
            &bdquo;{block.from}&rdquo;
          </p>
        </div>
        <div className="self-center text-[1.25rem] shrink-0 hidden sm:block" style={{ color: "#DAD7D2" }} aria-hidden="true">
          →
        </div>
        <div className="flex-1 border border-[#DAD7D2] p-5">
          <p className="text-[10px] tracking-[0.12em] uppercase font-medium mb-3" style={{ color: "#8A7E6F" }}>
            {transitionLabels.to}
          </p>
          <ul className="flex flex-col gap-2">
            {block.to.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-[0.55em] w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#1B2E4B" }} aria-hidden="true" />
                <span className="text-[0.9375rem] leading-[1.7] font-light" style={{ color: "#1A1917" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
}

function RichContent({
  content,
  transitionLabels,
}: {
  content: AreaContent;
  transitionLabels: { from: string; to: string };
}) {
  return (
    <>
      <section className="px-6 md:px-10 py-16 border-b border-[#DAD7D2]">
        <div className="max-w-site mx-auto">
          <p
            className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.5] max-w-2xl whitespace-pre-line"
            style={{ color: "#1B2E4B", letterSpacing: "-0.01em" }}
          >
            {content.tagline}
          </p>
        </div>
      </section>

      {content.sections.map((section, si) => (
        <section key={si} className="px-6 md:px-10 py-14 border-b border-[#DAD7D2]">
          <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            <div className="md:col-span-3">
              <h2
                className="text-[0.8125rem] tracking-[0.06em] font-medium uppercase sticky top-20"
                style={{ color: "#8A7E6F" }}
              >
                {section.title}
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-5 flex flex-col gap-8">
              {section.blocks.map((block, bi) => (
                <Block key={bi} block={block} transitionLabels={transitionLabels} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {content.cta && (
        <section className="px-6 md:px-10 py-16">
          <div className="max-w-site mx-auto">
            {content.cta.note && (
              <p className="text-[1rem] leading-[1.75] font-light mb-6 max-w-md" style={{ color: "#6B6560" }}>
                {content.cta.note}
              </p>
            )}
            <a
              href={content.cta.href}
              target={content.cta.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-block text-[0.9375rem] font-medium underline underline-offset-4 decoration-[#DAD7D2] hover:decoration-navy transition-colors duration-250"
              style={{ color: "#1B2E4B" }}
            >
              {content.cta.label} →
            </a>
          </div>
        </section>
      )}
    </>
  );
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const area = areas.find((a) => a.id === slug);
  if (!area) notFound();

  const t = await getTranslations({ locale, namespace: "areas_data" });
  const tRoot = await getTranslations({ locale });
  const tStatus = await getTranslations({ locale, namespace: "status" });
  const content = await getAreaContent(slug);

  const localizedTitle = t(`${slug}.title`);
  const localizedDescription = t(`${slug}.description`);
  const localizedStatus = tStatus(area.status);

  const homeHref = `/${locale === routing.defaultLocale ? "" : locale}`;

  return (
    <div style={{ backgroundColor: "#F6F4F1", minHeight: "100vh" }}>
      <BreadcrumbJsonLd locale={locale} slug={slug} areaTitle={localizedTitle} />

      {/* Back navigation — landmark header for the subpage */}
      <header
        className="px-6 md:px-10 h-14 flex items-center sticky top-0 z-50"
        style={{ backgroundColor: "#F6F4F1", borderBottom: "1px solid #DAD7D2" }}
      >
        <Link
          href={homeHref}
          className="text-[13px] font-medium tracking-wider uppercase focus:outline-none focus-visible:underline"
          style={{ color: "#1B2E4B" }}
          aria-label="Wróć do strony głównej"
        >
          ← KM
        </Link>
      </header>

      <main>
        {/* Hero section */}
        <section
          className="px-6 md:px-10 pt-16 pb-14"
          style={{ borderBottom: "1px solid #DAD7D2" }}
          aria-labelledby="area-heading"
        >
          <div className="max-w-site mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: "#8A7E6F" }}>
                {area.id}
              </span>
              <StatusChip label={localizedStatus} />
            </div>
            <h1
              id="area-heading"
              className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.08] max-w-2xl mb-6"
              style={{ letterSpacing: "-0.025em", color: "#1B2E4B" }}
            >
              {localizedTitle}
            </h1>
            <p className="text-[1.0625rem] leading-[1.75] max-w-xl font-light" style={{ color: "#6B6560" }}>
              {localizedDescription}
            </p>
          </div>
        </section>

        {content ? (
          <RichContent
            content={content}
            transitionLabels={{
              from: tRoot("transition.from"),
              to: tRoot("transition.to"),
            }}
          />
        ) : (
          <section className="px-6 md:px-10 py-20">
            <div className="max-w-site mx-auto">
              <div
                className="border border-dashed border-[#DAD7D2] p-12 text-center"
                style={{ color: "#B8B4AE" }}
              >
                <p className="text-[0.875rem] tracking-wide">{tRoot("wip")}</p>
              </div>
            </div>
          </section>
        )}

        {/* Footer back link */}
        <div className="px-6 md:px-10 py-12" style={{ borderTop: "1px solid #DAD7D2" }}>
          <div className="max-w-site mx-auto">
            <Link
              href={homeHref}
              className="text-[0.875rem] font-medium underline underline-offset-4 decoration-[#DAD7D2] hover:decoration-navy transition-colors duration-250 focus:outline-none focus-visible:decoration-navy"
              style={{ color: "#1B2E4B" }}
            >
              {tRoot("back")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
