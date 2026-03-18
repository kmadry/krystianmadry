import { notFound } from "next/navigation";
import Link from "next/link";
import { areas, getArea } from "@/lib/areas";
import { getAreaContent, type AreaContent, type ContentBlock } from "@/lib/content";
import StatusChip from "@/components/StatusChip";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const area = getArea(params.slug);
  if (!area) return {};
  return {
    title: `${area.title} — Krystian Mądry`,
    description: area.description,
  };
}

function Block({ block }: { block: ContentBlock }) {
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
          <p
            className="text-[1rem] leading-[1.8] font-light"
            style={{ color: "#6B6560" }}
          >
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
              <span
                className="text-[1rem] leading-[1.8] font-light"
                style={{ color: "#6B6560" }}
              >
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
        {/* From */}
        <div
          className="flex-1 border border-dashed border-[#DAD7D2] p-5"
        >
          <p
            className="text-[10px] tracking-[0.12em] uppercase font-medium mb-3"
            style={{ color: "#B8B4AE" }}
          >
            Z trybu
          </p>
          <p
            className="text-[0.9375rem] leading-[1.7] font-light"
            style={{ color: "#8A7E6F" }}
          >
            „{block.from}"
          </p>
        </div>

        {/* Arrow */}
        <div
          className="self-center text-[1.25rem] shrink-0 hidden sm:block"
          style={{ color: "#DAD7D2" }}
          aria-hidden="true"
        >
          →
        </div>

        {/* To */}
        <div className="flex-1 border border-[#DAD7D2] p-5">
          <p
            className="text-[10px] tracking-[0.12em] uppercase font-medium mb-3"
            style={{ color: "#8A7E6F" }}
          >
            Wchodzisz w
          </p>
          <ul className="flex flex-col gap-2">
            {block.to.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className="mt-[0.55em] w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: "#1B2E4B" }}
                  aria-hidden="true"
                />
                <span
                  className="text-[0.9375rem] leading-[1.7] font-light"
                  style={{ color: "#1A1917" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
}

function RichContent({ content }: { content: AreaContent }) {
  return (
    <>
      {/* Tagline */}
      <section className="px-6 md:px-10 py-16 border-b border-[#DAD7D2]">
        <div className="max-w-site mx-auto">
          <p
            className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.5] max-w-2xl"
            style={{ color: "#1B2E4B", letterSpacing: "-0.01em" }}
          >
            {content.tagline}
          </p>
        </div>
      </section>

      {/* Sections */}
      {content.sections.map((section, si) => (
        <section
          key={si}
          className="px-6 md:px-10 py-14 border-b border-[#DAD7D2]"
        >
          <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Section title */}
            <div className="md:col-span-3">
              <h2
                className="text-[0.8125rem] tracking-[0.06em] font-medium uppercase sticky top-20"
                style={{ color: "#8A7E6F" }}
              >
                {section.title}
              </h2>
            </div>

            {/* Blocks */}
            <div className="md:col-span-7 md:col-start-5 flex flex-col gap-8">
              {section.blocks.map((block, bi) => (
                <Block key={bi} block={block} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      {content.cta && (
        <section className="px-6 md:px-10 py-16">
          <div className="max-w-site mx-auto">
            {content.cta.note && (
              <p
                className="text-[1rem] leading-[1.75] font-light mb-6 max-w-md"
                style={{ color: "#6B6560" }}
              >
                {content.cta.note}
              </p>
            )}
            <a
              href={content.cta.href}
              target="_blank"
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

function Placeholder() {
  return (
    <section className="px-6 md:px-10 py-20">
      <div className="max-w-site mx-auto">
        <div
          className="border border-dashed border-[#DAD7D2] p-12 text-center"
          style={{ color: "#B8B4AE" }}
        >
          <p className="text-[0.875rem] tracking-wide">treść w przygotowaniu</p>
        </div>
      </div>
    </section>
  );
}

export default async function AreaPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = getArea(params.slug);
  if (!area) notFound();

  const content = await getAreaContent(params.slug);

  return (
    <div style={{ backgroundColor: "#F6F4F1", minHeight: "100vh" }}>
      {/* Top nav */}
      <header
        className="px-6 md:px-10 h-14 flex items-center sticky top-0 z-50"
        style={{
          backgroundColor: "#F6F4F1",
          borderBottom: "1px solid #DAD7D2",
        }}
      >
        <Link
          href="/"
          className="text-[13px] font-medium tracking-wider uppercase focus:outline-none focus-visible:underline"
          style={{ color: "#1B2E4B" }}
        >
          ← KM
        </Link>
      </header>

      {/* Hero */}
      <section
        className="px-6 md:px-10 pt-16 pb-14"
        style={{ borderBottom: "1px solid #DAD7D2" }}
      >
        <div className="max-w-site mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="text-[10px] tracking-[0.14em] uppercase font-medium"
              style={{ color: "#8A7E6F" }}
            >
              {area.id}
            </span>
            <StatusChip label={area.status} />
          </div>

          <h1
            className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.08] max-w-2xl mb-6"
            style={{ letterSpacing: "-0.025em", color: "#1B2E4B" }}
          >
            {area.title}
          </h1>

          <p
            className="text-[1.0625rem] leading-[1.75] max-w-xl font-light"
            style={{ color: "#6B6560" }}
          >
            {area.description}
          </p>
        </div>
      </section>

      {/* Content */}
      {content ? <RichContent content={content} /> : <Placeholder />}

      {/* Back link */}
      <div
        className="px-6 md:px-10 py-12"
        style={{ borderTop: "1px solid #DAD7D2" }}
      >
        <div className="max-w-site mx-auto">
          <Link
            href="/"
            className="text-[0.875rem] font-medium underline underline-offset-4 decoration-[#DAD7D2] hover:decoration-navy transition-colors duration-250"
            style={{ color: "#1B2E4B" }}
          >
            ← Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
