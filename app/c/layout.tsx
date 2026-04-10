import { CFooter } from "../components/c/CFooter";
import { CNav } from "../components/c/CNav";

export default function DesignCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-[#f7f3eb] font-[family-name:var(--font-c-sans)] text-stone-800">
      <CNav />
      <div className="pt-[4.5rem]">{children}</div>
      <CFooter />
    </div>
  );
}
