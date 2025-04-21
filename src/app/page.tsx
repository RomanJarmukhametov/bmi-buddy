import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import CTA from "@/components/landing/CTA";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
