
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Ready to Transform Your Web Experience?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Join thousands of developers and designers who are creating
            beautiful, responsive websites with our modern design system.
          </p>
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Button size="lg" variant="secondary" className="text-blue-600 font-medium">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
