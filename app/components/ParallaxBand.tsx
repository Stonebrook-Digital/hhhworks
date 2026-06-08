type ParallaxBandProps = {
  imageSrc: string;
  children: React.ReactNode;
  overlay?: string;
  className?: string;
  contentClassName?: string;
};

export function ParallaxBand({
  imageSrc,
  children,
  overlay = "bg-navy-deep/75",
  className = "",
  contentClassName = "",
}: ParallaxBandProps) {
  return (
    <section
      className={`parallax-band relative min-h-[min(70vh,36rem)] bg-cover bg-center bg-no-repeat ${className}`.trim()}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={`absolute inset-0 ${overlay}`} aria-hidden />
      <div className={`relative z-10 flex min-h-full items-center py-16 md:py-24 ${contentClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
}
