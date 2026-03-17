import RevealOnScroll from "./RevealOnScroll";

const principles = [
  {
    index: "01",
    text: "Nie skupiam się na narzędziach, tylko na rezultacie. Kod, produkt czy fizyczny obiekt to tylko forma.",
  },
  {
    index: "02",
    text: "Myślę systemowo — szukam zależności, upraszczam, domykam. Nie interesuje mnie perfekcja, tylko dowiezienie rzeczy, które działają.",
  },
  {
    index: "03",
    text: "Większość rzeczy, które robię, powstaje równolegle. Z zewnątrz wygląda to jak chaos — w środku ma strukturę.",
  },
];

export default function HowIWork() {
  return (
    <section
      id="how"
      className="px-6 md:px-10 py-24 md:py-32 border-t border-[#DAD7D2]"
      aria-labelledby="how-heading"
    >
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: label + heading + decorative form */}
          <RevealOnScroll className="md:col-span-4">
            <p className="text-[11px] tracking-[0.14em] uppercase text-taupe mb-4 font-medium">
              03 — Proces
            </p>
            <h2
              id="how-heading"
              className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink tracking-tight leading-tight"
            >
              Jak działam
            </h2>

            {/* Decorative concentric circles */}
            <div className="hidden md:block mt-16" aria-hidden="true">
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-[0.08]"
              >
                <circle cx="44" cy="44" r="43.5" stroke="#1B2E4B" />
                <circle cx="44" cy="44" r="29.5" stroke="#1B2E4B" />
                <circle cx="44" cy="44" r="15.5" stroke="#1B2E4B" />
                <circle cx="44" cy="44" r="3" fill="#1B2E4B" />
              </svg>
            </div>
          </RevealOnScroll>

          {/* Right: principles */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-0">
            {principles.map((p, i) => (
              <RevealOnScroll key={p.index} delay={i * 100}>
                <div
                  className={`flex gap-6 py-8 ${
                    i < principles.length - 1 ? "border-b border-[#DAD7D2]" : ""
                  }`}
                >
                  <span
                    className="text-[11px] tracking-[0.1em] text-taupe font-medium mt-1 shrink-0 w-6"
                    aria-hidden="true"
                  >
                    {p.index}
                  </span>
                  <p className="text-[1rem] leading-[1.8] text-muted font-light">
                    {p.text}
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
