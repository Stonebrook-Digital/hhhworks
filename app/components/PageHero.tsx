import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  bannerSrc?: string;
  compact?: boolean;
};

export function PageHero({
  title,
  description,
  eyebrow = "Triple H Air Conditioning",
  bannerSrc,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy/6">
      {bannerSrc ? (
        <>
          <Image
            src={bannerSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-navy-deep/72" aria-hidden />
        </>
      ) : (
        <div className="absolute inset-0 bg-surface" aria-hidden />
      )}
      <div
        className={`container-site relative flex items-center ${
          compact
            ? "min-h-[min(28vh,13rem)] py-8 md:min-h-[min(30vh,14rem)] md:py-10"
            : "min-h-[min(38vh,18rem)] py-12 md:min-h-[min(42vh,22rem)] md:py-16"
        }`}
      >
        <Reveal immediate>
          <p className={bannerSrc ? "text-xs font-semibold tracking-[0.12em] text-surface/75 uppercase" : "eyebrow"}>
            {eyebrow}
          </p>
          <h1
            className={`font-display mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl ${bannerSrc ? "text-surface" : "text-navy"}`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${bannerSrc ? "text-surface/80" : "text-muted"}`}
            >
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
