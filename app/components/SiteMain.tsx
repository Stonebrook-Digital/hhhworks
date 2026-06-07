"use client";

import { usePathname } from "next/navigation";

export function SiteMain({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";

  return <div className={isHome ? undefined : "pt-[3.75rem]"}>{children}</div>;
}
