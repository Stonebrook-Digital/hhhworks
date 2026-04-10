import { BFooter } from "../components/b/BFooter";
import { BNav } from "../components/b/BNav";

export default function DesignBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-[#06060a] font-[family-name:var(--font-b-sans)] text-zinc-200">
      <BNav />
      <div className="pt-16">{children}</div>
      <BFooter />
    </div>
  );
}
