import StatusChip from "./StatusChip";
import RevealOnScroll from "./RevealOnScroll";

const items = [
  {
    label: "Mentoring",
    status: "startuje",
    note: "inkubacja.dev",
  },
  {
    label: "Integracja (RC)",
    status: "pierwszy event",
    note: "pierwszy event w drodze",
  },
  {
    label: "Inspiracja",
    status: "pierwsi klienci",
    note: "obiekty i odlewy",
  },
  {
    label: "Aplikacje",
    status: "w budowie",
    note: "pierwsze wersje",
  },
  {
    label: "Wypożyczalnia",
    status: "start",
    note: "uruchomienie",
  },
  {
    label: "Produkcja (3D / CNC)",
    status: "rozwój",
    note: "nowe możliwości",
  },
];

export default function InProgress() {
  return (
    <section
      id="progress"
      className="px-6 md:px-10 py-24 md:py-32 border-t border-[#DAD7D2]"
      aria-labelledby="progress-heading"
    >
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left */}
          <RevealOnScroll className="md:col-span-4">
            <p className="text-[11px] tracking-[0.14em] uppercase text-taupe mb-4 font-medium">
              04 — Teraz
            </p>
            <h2
              id="progress-heading"
              className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink tracking-tight leading-tight"
            >
              W trakcie
            </h2>
            <p className="text-[0.875rem] text-muted font-light leading-relaxed mt-4 max-w-[260px]">
              Aktualny stan rzeczy. Żadnych udawanych sukcesów.
            </p>
          </RevealOnScroll>

          {/* Right: list */}
          <div className="md:col-span-7 md:col-start-6">
            <ul className="flex flex-col" role="list">
              {items.map((item, i) => (
                <RevealOnScroll key={item.label} delay={i * 70}>
                  <li
                    className={`flex items-center justify-between gap-6 py-5 ${
                      i < items.length - 1 ? "border-b border-[#DAD7D2]" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[0.9375rem] font-medium text-ink leading-tight truncate">
                        {item.label}
                      </span>
                      <span className="text-[0.8125rem] text-muted font-light">
                        {item.note}
                      </span>
                    </div>
                    <StatusChip label={item.status} />
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
