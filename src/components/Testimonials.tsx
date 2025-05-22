
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    avatar: "SJ",
    testimonial: "This modern design system has completely transformed our workflow. The components are beautifully crafted and the documentation is excellent.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    avatar: "MC",
    testimonial: "I've used many design systems in my career, but this one stands out for its attention to detail and ease of customization. Highly recommended!",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "UX Researcher",
    avatar: "ER",
    testimonial: "The accessibility features are top-notch. Our users have noticed the improved experience, and our team loves how easy it is to maintain consistency.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied developers and designers who trust our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default Testimonials;
