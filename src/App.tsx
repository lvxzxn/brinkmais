import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Catalog } from "./components/Catalog";
import { Differentials } from "./components/Differentials";
import { About } from "./components/About";
import { MainCTA } from "./components/MainCTA";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="max-w-screen bg-[#faf7fa] font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <SocialProof />
      <Catalog />
      <Differentials />
      <About />
      <MainCTA />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
