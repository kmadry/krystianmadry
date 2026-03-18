"use client";

import Link from "next/link";
import { areas } from "@/lib/areas";
import StatusChip from "./StatusChip";
import RevealOnScroll from "./RevealOnScroll";

function AreaCard({ area }: { area: (typeof areas)[0] }) {
  return (
    <Link
      href={`/obszary/${area.id}`}
      className="group relative p-6 md:p-8 flex flex-col gap-5 transition-colors duration-250 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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

      {/* Arrow indicator */}
      <span
        className="text-[11px] tracking-[0.08em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-250 mt-1"
        style={{ color: "#6B8BB5" }}
        aria-hidden="true"
      >
        więcej →
      </span>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-350"
        style={{ backgroundColor: "#F0EDE9" }}
        aria-hidden="true"
      />
    </Link>
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
