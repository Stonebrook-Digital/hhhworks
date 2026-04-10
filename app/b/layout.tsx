import { BFooter } from "../components/b/BFooter";
import { BNav } from "../components/b/BNav";

export default function DesignBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-[#eef2f7] font-[family-name:var(--font-b-sans)] text-slate-800">
      <BNav />
      <div className="pt-[6.75rem]">{children}</div>
      <BFooter />
    </div>
  );
}
