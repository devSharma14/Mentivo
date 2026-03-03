import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}