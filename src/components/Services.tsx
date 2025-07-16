import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, PenTool, Smartphone, Clock, TrendingUp, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Convert more clients with AI Receptionists.",
      features: [
        "Answer calls 24/7",
        "Qualify leads automatically",
        "Book appointments seamlessly",
        "Custom voice training"
      ]
    },
    {
      icon: PenTool,
      title: "Content Generation",
      description: "Repurpose your existing content at scale.",
      features: [
        "Generate 10x more content",
        "5x more qualified leads",
        "Fully automated workflows",
        "Multi-platform distribution"
      ]
    },
    {
      icon: Smartphone,
      title: "AI App Development",
      description: "Get your idea built within 2-4 weeks.",
      features: [
        "Sleek, modern designs",
        "Complete functionality",
        "Deployed and optimized",
        "Ongoing support included"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage state-of-the-art AI to help your business grow and scale efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">24/7</span>
            </div>
            <p className="text-muted-foreground">Always Available</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">5x</span>
            </div>
            <p className="text-muted-foreground">More Leads</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">30 Days</span>
            </div>
            <p className="text-muted-foreground">Delivery Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};