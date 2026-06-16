import Image from "next/image";
import { ContactForm } from "@/app/components/ContactForm";
import { Reveal } from "@/app/components/Reveal";
import { ServiceIcon } from "@/app/components/ServiceIcon";
import type { ServicePageContent } from "@/lib/service-pages";
import { SERVICES } from "@/lib/site";

export function ServiceDetailLayout({ page }: { page: ServicePageContent }) {
  const service = SERVICES.find((item) => item.id === page.slug);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-navy/6">
        {page.bannerSrc ? (
          <>
            <Image
              src={page.bannerSrc}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: page.bannerPosition ?? "center center" }}
              sizes="100vw"
              priority
              aria-hidden
            />
            <div className="absolute inset-0 bg-navy-deep/72" aria-hidden />
          </>
        ) : (
          <div className="absolute inset-0 bg-surface" aria-hidden />
        )}
        <div className="container-site relative flex min-h-[min(38vh,18rem)] items-center py-12 md:min-h-[min(42vh,22rem)] md:py-16">
          <Reveal immediate>
            <p className={page.bannerSrc ? "text-xs font-semibold tracking-[0.12em] text-surface/75 uppercase" : "eyebrow"}>
              Services
            </p>
            <div className="mt-5 flex items-start gap-5 md:gap-6">
              {service ? (
                <div
                  className={
                    page.bannerSrc
                      ? "shrink-0 rounded-xl border border-white/20 bg-white/5 p-2 backdrop-blur-lg"
                      : "shrink-0 rounded-xl p-2"
                  }
                >
                  <ServiceIcon
                    icon={service.icon}
                    iconSrc={service.iconSrc}
                    title={service.title}
                  />
                </div>
              ) : null}
              <div className="min-w-0">
                <h1
                  className={`text-3xl font-semibold tracking-tight md:text-4xl ${page.bannerSrc ? "text-surface" : "text-navy"}`}
                >
                  {page.heroTitle}
                </h1>
                <p
                  className={`mt-3 max-w-2xl text-base leading-relaxed md:text-lg ${page.bannerSrc ? "text-surface/80" : "text-muted"}`}
                >
                  {page.heroSubtitle}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-site">
          <div
            className={`grid gap-10 ${page.imageSrc ? "lg:grid-cols-2 lg:items-center lg:gap-14" : "max-w-3xl"}`}
          >
            {page.imageSrc ? (
              <Reveal>
                <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_rgb(0_0_0_/0.08)]">
                  <Image
                    src={page.imageSrc}
                    alt={page.imageAlt ?? page.heroTitle}
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full object-cover"
                    style={{ objectPosition: page.imagePosition ?? "center center" }}
                    priority
                  />
                </div>
              </Reveal>
            ) : null}
            <Reveal delay={page.imageSrc ? 100 : 0}>
              {page.introTitle ? (
                <h2 className="text-xl font-semibold leading-snug text-navy md:text-2xl">
                  {page.introTitle}
                </h2>
              ) : null}
              <p
                className={`text-base leading-relaxed text-navy-muted md:text-lg ${page.introTitle ? "mt-4" : ""}`}
              >
                {page.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/6 bg-page py-12 md:py-16">
        <div className="container-site max-w-3xl space-y-10">
          {page.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 60}>
              <article>
                <h3 className="text-lg font-semibold text-navy md:text-xl">{section.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-muted">{section.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/6 py-10 md:py-12">
        <div className="container-site max-w-2xl">
          <Reveal>
            {page.closing ? (
              <p className="text-base leading-relaxed text-navy-muted">{page.closing}</p>
            ) : null}
            <h2 className={`text-lg font-semibold text-navy ${page.closing ? "mt-8" : ""}`}>
              Request a quote
            </h2>
            <div className="mt-4">
              <ContactForm variant="compact" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
