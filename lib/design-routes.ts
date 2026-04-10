export type DesignId = "a" | "b" | "c";

/** Parse pathname into design + slug (e.g. services, about) — slug "" means home */
export function parseDesignPath(pathname: string): { design: DesignId; slug: string } {
  if (pathname === "/b" || pathname === "/b/") return { design: "b", slug: "" };
  if (pathname.startsWith("/b/")) return { design: "b", slug: pathname.slice(3) };
  if (pathname === "/c" || pathname === "/c/") return { design: "c", slug: "" };
  if (pathname.startsWith("/c/")) return { design: "c", slug: pathname.slice(3) };
  if (pathname === "/" || pathname === "") return { design: "a", slug: "" };
  return { design: "a", slug: pathname.slice(1) };
}

const VALID = new Set(["", "services", "about", "gallery", "contact"]);

export function hrefForDesign(target: DesignId, slug: string): string {
  const s = VALID.has(slug) ? slug : "";
  const path = s ? `/${s}` : "/";
  if (target === "a") return path;
  return path === "/" ? `/${target}` : `/${target}/${s}`;
}
