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
      <div className="pt-[4.25rem]">{children}</div>
      <Footer />
    </>
  );
}
