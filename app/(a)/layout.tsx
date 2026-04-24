import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export default function DesignALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}
