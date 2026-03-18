"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const words: string[] = t.raw("words") as string[];
  const suffix = t("wordsSuffix");

  const lineRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const timeout = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "scaleX(1)";
    }, 700);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFading(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20 pb-24"
      aria-label="Wprowadzenie"
    >
      {/* Background grid accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 h-full w-2/3 opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <defs>
            <pattern id="grid-bg" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#1B2E4B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)" />
        </svg>
      </div>

      <div className="relative max-w-site mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left: text content */}
          <div className="md:col-span-7">
            <p
              className="text-[11px] tracking-[0.16em] text-taupe uppercase mb-10 font-medium"
              style={{ opacity: 0, animation: "fadeIn 0.6s ease 0.2s forwards" }}
            >
              {t("label")}
            </p>

            <h1
              className="font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.08] text-navy mb-8"
              style={{ letterSpacing: "-0.025em", opacity: 0, animation: "fadeInUp 0.7s ease 0.3s forwards" }}
            >
              {t("headline")}{" "}
              <br className="hidden sm:block" />
              <em className="not-italic" style={{ color: "#8A7E6F" }}>
                {t("headlineSub")}
              </em>
            </h1>

            <div
              ref={lineRef}
              className="w-12 h-px bg-navy mb-8 origin-left"
              style={{ opacity: 0, transform: "scaleX(0)", transition: "opacity 0.5s ease, transform 0.8s ease" }}
              aria-hidden="true"
            />

            <p
              className="text-[1.0625rem] leading-[1.8] text-muted max-w-[420px] font-light"
              style={{ opacity: 0, animation: "fadeInUp 0.7s ease 0.5s forwards" }}
            >
              <span
                className="inline-block font-medium text-navy min-w-[130px]"
                style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease" }}
                aria-live="polite"
              >
                {words[wordIndex]}
              </span>
              {" "}{suffix}
            </p>
          </div>

          {/* Right: portrait */}
          <div
            className="hidden md:flex md:col-span-4 md:col-start-9 justify-end items-center"
            style={{ opacity: 0, animation: "fadeIn 0.8s ease 0.6s forwards" }}
          >
            <div className="relative">
              {/* Offset border frame */}
              <div
                className="absolute -top-3 -right-3 w-full h-full border border-[#DAD7D2]"
                aria-hidden="true"
              />
              <div className="relative w-[260px] xl:w-[300px] overflow-hidden grayscale contrast-[1.05]">
                <Image
                  src="/KM.jpg"
                  alt="Krystian Mądry"
                  width={300}
                  height={360}
                  className="w-full object-cover object-top"
                  priority
                  style={{ aspectRatio: "5/6" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: "fadeIn 0.6s ease 1.2s forwards" }}
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.16em] text-taupe uppercase opacity-50">scroll</span>
        <div className="w-px h-8 bg-taupe opacity-30" style={{ animation: "pulseLine 2s ease infinite" }} />
      </div>
    </section>
  );
}
