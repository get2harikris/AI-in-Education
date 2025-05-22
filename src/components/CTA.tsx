
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_40%)]"></div>
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Web Experience?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Join thousands of developers and designers who are creating
            beautiful, responsive websites with our modern design system.
          </p>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{animationDelay: '0.2s'}}>
            <Button size="lg" variant="secondary" className="text-blue-600 font-medium hover:text-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
