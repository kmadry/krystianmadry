import Image from "next/image";
import { useTranslations } from "next-intl";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 border-t border-[#DAD7D2]" aria-labelledby="contact-heading">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">

          {/* Left: text + links */}
          <RevealOnScroll className="md:col-span-7 flex flex-col gap-10">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-taupe mb-4 font-medium">
                {t("label")}
              </p>
              <h2 id="contact-heading" className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink tracking-tight leading-tight">
                {t("title")}
              </h2>
            </div>
            <p className="text-[1rem] leading-[1.8] text-muted font-light max-w-lg">
              {t("text")}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] tracking-[0.14em] uppercase text-taupe font-medium">{t("emailLabel")}</span>
                <a
                  href="mailto:kryst.madry@gmail.com"
                  className="text-[1.0625rem] font-medium text-navy hover:text-navy-light underline underline-offset-4 decoration-[#DAD7D2] hover:decoration-navy transition-colors duration-250 w-fit"
                >
                  kryst.madry@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] tracking-[0.14em] uppercase text-taupe font-medium">{t("linkedinLabel")}</span>
                <a
                  href="https://www.linkedin.com/in/krystian-m%C4%85dry-60bb07105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.0625rem] font-medium text-navy hover:text-navy-light underline underline-offset-4 decoration-[#DAD7D2] hover:decoration-navy transition-colors duration-250 w-fit"
                >
                  linkedin.com/in/krystian-mądry
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: photo */}
          <RevealOnScroll className="md:col-span-4 md:col-start-9 flex flex-col gap-8" delay={100}>
            <div className="relative w-fit">
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-[#DAD7D2]"
                aria-hidden="true"
              />
              <div className="relative w-[300px] overflow-hidden">
                <Image
                  src="/KM.png"
                  alt="Krystian Mądry"
                  width={300}
                  height={360}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "5/6", transform: "scaleX(-1)" }}
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
