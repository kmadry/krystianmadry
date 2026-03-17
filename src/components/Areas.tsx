"use client";

import StatusChip from "./StatusChip";
import RevealOnScroll from "./RevealOnScroll";

const areas = [
  {
    id: "engineering",
    title: "Engineering / Praca projektowa",
    description:
      "Buduję i dowożę złożone produkty cyfrowe — od implementacji po architekturę.",
    status: "aktywnie",
  },
  {
    id: "produkty",
    title: "Produkty własne",
    description:
      "Tworzę własne aplikacje i produkty — od pomysłu do pierwszej działającej wersji.",
    status: "w budowie",
  },
  {
    id: "mentoring",
    title: "Mentoring / Inkubacja.dev",
    description:
      "Pomagam developerom wejść poziom wyżej — przez sposób myślenia i dowożenie, nie kolejne technologie.",
    status: "startuje",
  },
  {
    id: "events",
    title: "Eventy / Integracja",
    description:
      "Tworzę doświadczenia oparte na rywalizacji i zabawie — pierwszy event RC już w drodze.",
    status: "pierwszy event",
  },
  {
    id: "design",
    title: "Forma / Inspiracja",
    description:
      "Przekładam idee na fizyczne formy — minimalistyczne obiekty i odlewy.",
    status: "pierwsi klienci",
  },
  {
    id: "tools",
    title: "Narzędzia / Produkcja",
    description:
      "Druk 3D, CNC i grawer — zaplecze do tworzenia i testowania rzeczy.",
    status: "rozwój",
  },
  {
    id: "ops",
    title: "Operacje / Wypożyczalnia",
    description:
      "Buduję prosty biznes oparty na sprzęcie i dostępności.",
    status: "start",
  },
];

function AreaCard({ area }: { area: (typeof areas)[0] }) {
  return (
    <div
      className="group relative border-b border-r border-[#DAD7D2] bg-[#F6F4F1] p-6 md:p-8 flex flex-col gap-5
                 hover:bg-[#F0EDE9] transition-colors duration-250 cursor-default h-full"
    >
      {/* Top: id label + status */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] tracking-[0.14em] uppercase text-taupe font-medium">
          {area.id}
        </span>
        <StatusChip label={area.status} />
      </div>

      {/* Title */}
      <h3 className="text-[0.9375rem] font-medium leading-snug text-ink">
        {area.title}
      </h3>

      {/* Description */}
      <p className="text-[0.8125rem] leading-[1.7] text-muted font-light mt-auto">
        {area.description}
      </p>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-navy
                   group-hover:w-full transition-all duration-350"
        aria-hidden="true"
      />
    </div>
  );
}

function EmptyCell() {
  return (
    <div
      className="hidden md:flex items-center justify-center border-b border-r border-[#DAD7D2]"
      aria-hidden="true"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        <rect x="0.5" y="0.5" width="14" height="14" stroke="#1B2E4B" />
        <rect x="17.5" y="0.5" width="14" height="14" stroke="#1B2E4B" />
        <rect x="0.5" y="17.5" width="14" height="14" stroke="#1B2E4B" />
        <rect x="17.5" y="17.5" width="14" height="14" stroke="#1B2E4B" />
      </svg>
    </div>
  );
}

export default function Areas() {
  return (
    <section
      id="areas"
      className="px-6 md:px-10 py-24 md:py-32 border-t border-[#DAD7D2]"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-site mx-auto">
        {/* Section header */}
        <RevealOnScroll className="mb-14 md:mb-16">
          <p className="text-[11px] tracking-[0.14em] uppercase text-taupe mb-4 font-medium">
            02 — Obszary
          </p>
          <h2
            id="areas-heading"
            className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-ink tracking-tight leading-tight max-w-md"
          >
            Czym się zajmuję
          </h2>
        </RevealOnScroll>

        {/* Grid: bordered cell layout */}
        <div className="border-t border-l border-[#DAD7D2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
            {areas.map((area, i) => (
              <RevealOnScroll key={area.id} delay={i * 60} className="h-full">
                <AreaCard area={area} />
              </RevealOnScroll>
            ))}
            <EmptyCell />
          </div>
        </div>
      </div>
    </section>
  );
}
