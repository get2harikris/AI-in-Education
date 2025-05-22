
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Separator className="max-w-5xl mx-auto opacity-30" />
        <Features />
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <Testimonials />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
