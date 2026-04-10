import { CFooter } from "../components/c/CFooter";
import { CNav } from "../components/c/CNav";

export default function DesignCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-[#fafdfb] font-[family-name:var(--font-c-sans)] text-[#1a2e26] antialiased">
      <CNav />
      <div className="pt-[4.25rem]">{children}</div>
      <CFooter />
    </div>
  );
}
