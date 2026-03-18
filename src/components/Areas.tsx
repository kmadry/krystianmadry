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
      className="group relative p-6 md:p-8 flex flex-col gap-5 transition-colors duration-250 cursor-default h-full"
      style={{
        borderBottom: "1px solid #243D61",
        borderRight: "1px solid #243D61",
        backgroundColor: "#1B2E4B",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#1F3357")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#1B2E4B")
      }
    >
      {/* Top: id label + status */}
      <div className="flex items-center justify-between gap-3">
        <span
          className="text-[10px] tracking-[0.14em] uppercase font-medium"
          style={{ color: "#6B8BB5" }}
        >
          {area.id}
        </span>
        <StatusChip label={area.status} dark />
      </div>

      {/* Title */}
      <h3
        className="text-[0.9375rem] font-medium leading-snug"
        style={{ color: "#F0EDE9" }}
      >
        {area.title}
      </h3>

      {/* Description */}
      <p
        className="text-[0.8125rem] leading-[1.7] font-light mt-auto"
        style={{ color: "#7A9BBF" }}
      >
        {area.description}
      </p>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-350"
        style={{ backgroundColor: "#F0EDE9" }}
        aria-hidden="true"
      />
    </div>
  );
}

function EmptyCell() {
  return (
    <div
      className="hidden md:flex items-center justify-center"
      style={{
        borderBottom: "1px solid #243D61",
        borderRight: "1px solid #243D61",
        backgroundColor: "#1B2E4B",
      }}
      aria-hidden="true"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.12 }}
      >
        <rect x="0.5" y="0.5" width="14" height="14" stroke="#F0EDE9" />
        <rect x="17.5" y="0.5" width="14" height="14" stroke="#F0EDE9" />
        <rect x="0.5" y="17.5" width="14" height="14" stroke="#F0EDE9" />
        <rect x="17.5" y="17.5" width="14" height="14" stroke="#F0EDE9" />
      </svg>
    </div>
  );
}

export default function Areas() {
  return (
    <section
      id="areas"
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ backgroundColor: "#1B2E4B" }}
      aria-labelledby="areas-heading"
    >
      <div className="max-w-site mx-auto">
        {/* Section header */}
        <RevealOnScroll className="mb-14 md:mb-16">
          <p
            className="text-[11px] tracking-[0.14em] uppercase font-medium mb-4"
            style={{ color: "#6B8BB5" }}
          >
            02 — Obszary
          </p>
          <h2
            id="areas-heading"
            className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight leading-tight max-w-md"
            style={{ color: "#F0EDE9" }}
          >
            Czym się zajmuję
          </h2>
        </RevealOnScroll>

        {/* Grid: bordered cell layout */}
        <div style={{ borderTop: "1px solid #243D61", borderLeft: "1px solid #243D61" }}>
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
