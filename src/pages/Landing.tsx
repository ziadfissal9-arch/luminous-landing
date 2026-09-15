import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Experience from "../components/Experience";
import CtaBanner from "../components/CtaBanner";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Features />
        <Experience />
        <CtaBanner />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
