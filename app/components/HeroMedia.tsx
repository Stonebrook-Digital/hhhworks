"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

type Props = { slides: HeroSlide[]; intervalMs?: number };

export function HeroMedia({ slides, intervalMs = 6500 }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setActive((i) => (i + dir + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (reduceMotion || paused || slides.length < 2) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, paused, reduceMotion, slides.length]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, idx) => {
        const on = idx === active;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 overflow-hidden transition-[opacity] duration-[1400ms] ease-out ${
              on ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={!on}
          >
            <Image
              src={slide.src}
              alt={on ? slide.alt : ""}
              fill
              className={`object-cover object-center ${
                on && !reduceMotion ? "motion-safe:animate-hero-ken" : ""
              }`}
              sizes="100vw"
              priority={idx === 0}
            />
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-navy-deep/88 via-navy-deep/35 to-transparent md:bg-gradient-to-r md:from-navy-deep/92 md:via-navy-deep/55 md:to-navy-deep/20" />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/35 to-transparent md:hidden" />

      <div className="absolute right-0 bottom-5 left-0 z-[4] flex items-center justify-center gap-3 px-4 md:justify-start md:pl-8 lg:pl-10">
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/12 bg-navy-deep/35 px-2 py-1.5 backdrop-blur-md">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-surface/90 transition hover:bg-surface/10 hover:text-surface"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            <i className="fa-solid fa-chevron-left text-sm" aria-hidden />
          </button>
          <div className="flex gap-1.5 px-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show image ${idx + 1}`}
                aria-current={idx === active ? "true" : undefined}
                onClick={() => setActive(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === active ? "w-7 bg-surface" : "w-1.5 bg-surface/30 hover:bg-surface/55"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-surface/90 transition hover:bg-surface/10 hover:text-surface"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            <i className="fa-solid fa-chevron-right text-sm" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
