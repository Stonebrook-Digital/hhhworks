import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="pt-[3.75rem]">{children}</div>
      <Footer />
    </>
  );
}
