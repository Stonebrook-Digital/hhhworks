import Link from "next/link";
import { Reveal } from "@/app/components/Reveal";
import { ServiceIcon } from "@/app/components/ServiceIcon";
import { SERVICES } from "@/lib/site";

type ServiceGridProps = {
  compact?: boolean;
};

export function ServiceGrid({ compact }: ServiceGridProps) {
  return (
    <ul
      className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}
    >
      {SERVICES.map((service, index) => (
        <li key={service.id}>
          <Reveal delay={index * 90}>
            <Link
              href={service.href}
              className="card group flex h-full flex-col p-6 transition hover:border-navy/12 hover:shadow-[0_8px_24px_-8px_rgb(0_0_0_/0.08)]"
            >
              <span
                className={
                  service.iconSrc
                    ? "flex items-start justify-start"
                    : "flex h-11 w-11 items-center justify-center rounded-xl bg-brand/8 text-brand transition group-hover:bg-brand/12"
                }
                aria-hidden
              >
                <ServiceIcon icon={service.icon} iconSrc={service.iconSrc} title={service.title} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Learn more
                <i className="fa-solid fa-arrow-right text-[10px] transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
