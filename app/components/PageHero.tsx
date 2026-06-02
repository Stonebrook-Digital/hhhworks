type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-navy/6 bg-surface">
      <div className="container-site py-12 md:py-16">
        <p className="eyebrow">Triple H Air Conditioning</p>
        <h1 className="font-display mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
