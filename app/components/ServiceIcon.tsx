import Image from "next/image";

type ServiceIconProps = {
  icon: string;
  iconSrc?: string;
  title: string;
  size?: "sm" | "md";
};

const IMAGE_SIZES = {
  sm: { px: 120, className: "h-[7.5rem] w-[7.5rem]" },
  md: { px: 156, className: "h-[9.75rem] w-[9.75rem]" },
} as const;

export function ServiceIcon({ icon, iconSrc, title, size = "md" }: ServiceIconProps) {
  if (iconSrc) {
    const { px, className } = IMAGE_SIZES[size];
    return (
      <Image
        src={iconSrc}
        alt=""
        width={px}
        height={px}
        className={`${className} object-contain`}
        aria-hidden
        unoptimized
      />
    );
  }

  return <i className={`fa-solid ${icon} ${size === "sm" ? "text-base" : "text-lg"}`} aria-hidden />;
}
