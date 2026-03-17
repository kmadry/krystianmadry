import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ backgroundColor: "#1B2E4B", borderTop: "1px solid #243D61" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left */}
          <RevealOnScroll className="md:col-span-4">
            <p
              className="text-[11px] tracking-[0.14em] uppercase font-medium mb-4"
              style={{ color: "#6B8BB5" }}
            >
              04 — Kontakt
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight leading-tight"
              style={{ color: "#F0EDE9" }}
            >
              Kontakt
            </h2>
          </RevealOnScroll>

          {/* Right */}
          <RevealOnScroll
            className="md:col-span-7 md:col-start-6 flex flex-col gap-10"
            delay={100}
          >
            <p
              className="text-[1rem] leading-[1.8] font-light max-w-lg"
              style={{ color: "#9AAFC8" }}
            >
              Jeśli widzisz miejsce, gdzie możemy się przeciąć&nbsp;— odezwij
              się. Bez przesadnych formularzy i korporacyjnych wstępów.
            </p>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-[10px] tracking-[0.14em] uppercase font-medium"
                  style={{ color: "#6B8BB5" }}
                >
                  Email
                </span>
                <a
                  href="mailto:kryst.madry@gmail.com"
                  className="text-[1.0625rem] font-medium underline underline-offset-4 transition-opacity duration-250 hover:opacity-70 w-fit"
                  style={{
                    color: "#E8DDCC",
                    textDecorationColor: "#2A4570",
                  }}
                >
                  kryst.madry@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-[10px] tracking-[0.14em] uppercase font-medium"
                  style={{ color: "#6B8BB5" }}
                >
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/krystian-m%C4%85dry-60bb07105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.0625rem] font-medium underline underline-offset-4 transition-opacity duration-250 hover:opacity-70 w-fit"
                  style={{
                    color: "#E8DDCC",
                    textDecorationColor: "#2A4570",
                  }}
                >
                  linkedin.com/in/krystian-mądry
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
