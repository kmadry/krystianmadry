import { useTranslations } from "next-intl";
import RevealOnScroll from "./RevealOnScroll";

export default function HowIWork() {
  const t = useTranslations("how");
  const principles: string[] = t.raw("principles") as string[];

  return (
    <section id="how" className="px-6 md:px-10 py-24 md:py-32" style={{ backgroundColor: "#1C1A17" }} aria-labelledby="how-heading">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <RevealOnScroll className="md:col-span-4">
            <p className="text-[11px] tracking-[0.14em] uppercase font-medium mb-4" style={{ color: "#6B5F50" }}>
              {t("label")}
            </p>
            <h2 id="how-heading" className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight leading-tight" style={{ color: "#EDE8E2" }}>
              {t("title")}
            </h2>
            <div className="hidden md:block mt-16" aria-hidden="true">
              <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{ opacity: 0.12 }}>
                <circle cx="44" cy="44" r="43.5" stroke="#EDE8E2" />
                <circle cx="44" cy="44" r="29.5" stroke="#EDE8E2" />
                <circle cx="44" cy="44" r="15.5" stroke="#EDE8E2" />
                <circle cx="44" cy="44" r="3" fill="#EDE8E2" />
              </svg>
            </div>
          </RevealOnScroll>

          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-0">
            {principles.map((text, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div
                  className="flex gap-6 py-8"
                  style={{ borderBottom: i < principles.length - 1 ? "1px solid #2C2924" : undefined }}
                >
                  <span className="text-[11px] tracking-[0.1em] font-medium mt-1 shrink-0 w-6" style={{ color: "#6B5F50" }} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1rem] leading-[1.8] font-light" style={{ color: "#8C7F6E" }}>
                    {text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
