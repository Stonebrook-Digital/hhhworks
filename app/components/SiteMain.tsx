"use client";

import { usePathname } from "next/navigation";

export function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div key={pathname} className={`animate-page-enter ${isHome ? "" : "pt-[3.75rem]"}`}>
      {children}
    </div>
  );
}
