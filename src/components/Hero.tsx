"use client";

import { useEffect, useRef, useState } from "react";

const domainWords = ["software", "produkty", "doświadczenia", "fizyczne formy"];

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Animate the separator line on mount
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "scaleX(1)";
    }, 700);
    return () => clearTimeout(t);
  }, []);

  // Cycle through domain words slowly
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % domainWords.length);
        setFading(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20 pb-24"
      aria-label="Wprowadzenie"
    >
      {/* Background grid accent — top right */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute right-0 top-0 h-full w-2/3 opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <defs>
            <pattern
              id="grid-bg"
              width="72"
              height="72"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 72 0 L 0 0 0 72"
                fill="none"
                stroke="#1B2E4B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)" />
        </svg>

        {/* Nested squares — architectural ornament, top right */}
        <svg
          className="absolute right-8 top-20 md:right-14 md:top-28 opacity-[0.06]"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="64" height="64" stroke="#1B2E4B" />
          <rect x="16.5" y="16.5" width="64" height="64" stroke="#1B2E4B" />
        </svg>
      </div>

      <div className="relative max-w-site mx-auto w-full">
        {/* Identifier */}
        <p
          className="text-[11px] tracking-[0.16em] text-taupe uppercase mb-10 font-medium"
          style={{ opacity: 0, animation: "fadeIn 0.6s ease 0.2s forwards" }}
        >
          Krystian Mądry
        </p>

        {/* Main headline */}
        <h1
          className="font-serif text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[1.08] text-navy max-w-3xl mb-8"
          style={{
            letterSpacing: "-0.025em",
            opacity: 0,
            animation: "fadeInUp 0.7s ease 0.3s forwards",
          }}
        >
          Łączę światy,{" "}
          <br className="hidden sm:block" />
          <em className="not-italic" style={{ color: "#8A7E6F" }}>
            które rzadko się spotykają.
          </em>
        </h1>

        {/* Animated separator */}
        <div
          ref={lineRef}
          className="w-12 h-px bg-navy mb-8 origin-left"
          style={{
            opacity: 0,
            transform: "scaleX(0)",
            transition: "opacity 0.5s ease, transform 0.8s ease",
          }}
          aria-hidden="true"
        />

        {/* Supporting line with cycling domain word */}
        <p
          className="text-[1.0625rem] leading-[1.8] text-muted max-w-[480px] mb-12 font-light"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease 0.5s forwards" }}
        >
          <span
            className="inline-block font-medium text-navy min-w-[120px]"
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 0.35s ease",
            }}
            aria-live="polite"
          >
            {domainWords[wordIndex]}
          </span>
          {" "}— budowane równolegle, systemowo, bez zbędnego chaosu.
        </p>

        {/* Soft CTA */}
        <p
          className="text-[0.9375rem] text-taupe leading-relaxed max-w-sm border-l-2 border-[#DAD7D2] pl-4"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease 0.7s forwards" }}
        >
          Jeśli widzisz miejsce, gdzie możemy się przeciąć&nbsp;—{" "}
          <a
            href="#contact"
            className="text-navy underline underline-offset-4 decoration-[#DAD7D2] hover:decoration-navy transition-colors duration-250"
          >
            odezwij się.
          </a>
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: "fadeIn 0.6s ease 1.2s forwards" }}
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.16em] text-taupe uppercase opacity-50">
          scroll
        </span>
        <div
          className="w-px h-8 bg-taupe opacity-30"
          style={{ animation: "pulseLine 2s ease infinite" }}
        />
      </div>
    </section>
  );
}
