"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Start", href: "#hero" },
  { label: "Obszary", href: "#areas" },
  { label: "Jak działam", href: "#how" },
  { label: "Kontakt", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? "bg-[#F6F4F1]/95 backdrop-blur-sm border-b border-[#DAD7D2]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        {/* Monogram */}
        <button
          onClick={() => handleLink("#hero")}
          className="text-[13px] font-medium tracking-wider text-navy uppercase focus:outline-none focus-visible:ring-1 focus-visible:ring-navy"
          aria-label="Powrót na górę"
        >
          KM
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Nawigacja główna">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-[13px] tracking-wide text-muted hover:text-navy transition-colors duration-250 focus:outline-none focus-visible:underline"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-navy"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-ink transition-transform duration-250 origin-center ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-opacity duration-250 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-transform duration-250 origin-center ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ${
          menuOpen ? "max-h-64" : "max-h-0"
        } bg-[#F6F4F1]/98 backdrop-blur-sm border-b border-[#DAD7D2]`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Nawigacja mobilna">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-left text-[14px] text-muted hover:text-navy py-2.5 border-b border-[#DAD7D2] last:border-0 transition-colors duration-250 focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
