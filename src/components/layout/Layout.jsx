import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/common/PageTransition";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}