/**
 * Home page component for the BMI Buddy application.
 * This is the main landing page that includes the hero section,
 * about section, and call-to-action with the BMI calculator.
 *
 * @returns {JSX.Element} The rendered Home page component with header, main content sections, and footer
 */
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
