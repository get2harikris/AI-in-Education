
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Layers, Zap, Shield, Smartphone, Globe, Pen, Github, Twitter, Linkedin, Mail, StarIcon } from "lucide-react";
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <nav className="w-full py-4 bg-white/90 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-100">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">ModernWeb</h1>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {['Features', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-100 shadow-lg animate-fade-in">
            <div className="container px-4 py-4 mx-auto flex flex-col space-y-4">
              {['Features', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Create <span className="gradient-text">Beautiful</span> Modern Web Experiences
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                Craft stunning, responsive websites with our modern design system. Built for developers and designers who want to create exceptional digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Button size="lg" className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="font-medium hover:bg-blue-50 transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto opacity-30" />

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-lg text-gray-600">
                Everything you need to create stunning web experiences that delight your users.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Layers, title: "Modern Design", description: "Clean, minimalist design with a focus on typography and whitespace.", delay: "0s" },
                { icon: Zap, title: "Performance First", description: "Optimized for speed and efficiency across all devices and browsers.", delay: "0.1s" },
                { icon: Shield, title: "Secure Framework", description: "Built with security best practices to protect your data and users.", delay: "0.2s" },
                { icon: Smartphone, title: "Fully Responsive", description: "Looks great on any device, from smartphones to desktop computers.", delay: "0.3s" },
                { icon: Globe, title: "Global Reach", description: "Internationalization support for worldwide audience engagement.", delay: "0.4s" },
                { icon: Pen, title: "Customizable", description: "Easy to customize and extend to match your brand and requirements.", delay: "0.5s" }
              ].map((feature, index) => (
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

        {/* Testimonials Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
                <p className="text-lg text-gray-600">
                  Join thousands of satisfied developers and designers who trust our platform.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Sarah Johnson", role: "Product Designer", avatar: "SJ", testimonial: "This modern design system has completely transformed our workflow. The components are beautifully crafted and the documentation is excellent.", rating: 5 },
                  { name: "Michael Chen", role: "Frontend Developer", avatar: "MC", testimonial: "I've used many design systems in my career, but this one stands out for its attention to detail and ease of customization. Highly recommended!", rating: 5 },
                  { name: "Emma Rodriguez", role: "UX Researcher", avatar: "ER", testimonial: "The accessibility features are top-notch. Our users have noticed the improved experience, and our team loves how easy it is to maintain consistency.", rating: 4 }
                ].map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6">"{testimonial.testimonial}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="" alt={testimonial.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
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
      </main>

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">ModernWeb</h3>
              <p className="mb-4 text-gray-400 max-w-md">
                Creating beautiful web experiences with modern design principles and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                {['Home', 'Features', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left md:flex md:justify-between">
            <p>© {currentYear} ModernWeb. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed with <span className="text-red-500">♥</span> for the modern web
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
