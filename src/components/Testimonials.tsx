import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      content: "The AI voice agent they built increased our lead conversion by 300%. Our customers love the 24/7 availability and the seamless experience.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "Marketing Director, GrowthCorp",
      content: "Their content generation AI helped us scale our social media presence from 100K to 2M followers in just 6 months. Incredible results!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, InnovateLab",
      content: "Professional, responsive, and delivered exactly what they promised. The app they built exceeded our expectations and launched on time.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by <span className="bg-gradient-hero bg-clip-text text-transparent">World-Class</span> Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 bg-card border-border relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Join hundreds of satisfied clients</p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="font-bold">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <span className="text-muted-foreground">500+ projects completed</span>
            <div className="w-px h-6 bg-border" />
            <span className="text-muted-foreground">99% client satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};