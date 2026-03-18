"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/routing";

const localeLabels: Record<string, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
  es: "ES",
};

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { label: t("start"), href: "#hero" },
    { label: t("areas"), href: "#areas" },
    { label: t("how"), href: "#how" },
    { label: t("contact"), href: "#contact" },
  ];

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

  const switchLocale = (nextLocale: string) => {
    setLangOpen(false);
    // Rebuild path with new locale prefix
    const segments = pathname.split("/").filter(Boolean);
    const isCurrentLocalePrefix = routing.locales.includes(segments[0] as "pl" | "en" | "de" | "es");
    const pathWithoutLocale = isCurrentLocalePrefix ? "/" + segments.slice(1).join("/") : pathname;
    const newPath = nextLocale === routing.defaultLocale
      ? pathWithoutLocale || "/"
      : `/${nextLocale}${pathWithoutLocale}`;
    router.push(newPath);
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

        <div className="flex items-center gap-6">
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

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="text-[11px] font-medium tracking-[0.12em] text-muted hover:text-navy transition-colors duration-250 focus:outline-none focus-visible:ring-1 focus-visible:ring-navy px-2 py-1 border border-transparent hover:border-[#DAD7D2]"
              aria-label="Zmień język"
              aria-expanded={langOpen}
            >
              {localeLabels[locale]}
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1 bg-[#F6F4F1] border border-[#DAD7D2] z-20 min-w-[64px]">
                  {routing.locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`block w-full text-left px-3 py-2 text-[11px] font-medium tracking-[0.12em] transition-colors duration-250 hover:bg-[#EDEAE6] ${
                        l === locale ? "text-navy" : "text-muted"
                      }`}
                    >
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-navy"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-ink transition-transform duration-250 origin-center ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-ink transition-opacity duration-250 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-ink transition-transform duration-250 origin-center ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ${menuOpen ? "max-h-72" : "max-h-0"} bg-[#F6F4F1]/98 backdrop-blur-sm border-b border-[#DAD7D2]`}
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
          <div className="flex gap-3 pt-3">
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`text-[11px] font-medium tracking-[0.12em] transition-colors duration-250 ${l === locale ? "text-navy" : "text-muted"}`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
