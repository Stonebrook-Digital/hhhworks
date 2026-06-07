import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { SiteMain } from "../components/SiteMain";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <SiteMain>{children}</SiteMain>
      <Footer />
    </>
  );
}
