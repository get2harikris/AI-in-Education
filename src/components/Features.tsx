
import { 
  Layers, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Pen
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Layers,
    title: "Modern Design",
    description: "Clean, minimalist design with a focus on typography and whitespace.",
    delay: "0s"
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized for speed and efficiency across all devices and browsers.",
    delay: "0.1s"
  },
  {
    icon: Shield,
    title: "Secure Framework",
    description: "Built with security best practices to protect your data and users.",
    delay: "0.2s"
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Looks great on any device, from smartphones to desktop computers.",
    delay: "0.3s"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Internationalization support for worldwide audience engagement.",
    delay: "0.4s"
  },
  {
    icon: Pen,
    title: "Customizable",
    description: "Easy to customize and extend to match your brand and requirements.",
    delay: "0.5s"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600">
            Everything you need to create stunning web experiences that delight your users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-gray-100 hover-scale card-shadow animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-blue-50 text-blue-600"
              )}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
