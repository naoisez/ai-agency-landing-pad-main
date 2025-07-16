import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Loader2 } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "AI Customer Service Bot",
      category: "Voice Agent",
      description: "24/7 customer support automation for e-commerce platform",
      status: "loading",
      tags: ["Voice AI", "Customer Service", "Automation"]
    },
    {
      title: "Content Generation Platform",
      category: "AI App",
      description: "Automated content creation for social media marketing",
      status: "loading",
      tags: ["Content AI", "Marketing", "Social Media"]
    },
    {
      title: "Lead Qualification System",
      category: "AI Agent",
      description: "Intelligent lead scoring and qualification automation",
      status: "loading",
      tags: ["Lead Gen", "CRM", "Analytics"]
    },
    {
      title: "Smart Appointment Booking",
      category: "Voice Agent",
      description: "Voice-powered appointment scheduling with calendar integration",
      status: "loading",
      tags: ["Scheduling", "Voice AI", "Integration"]
    },
    {
      title: "AI Sales Assistant",
      category: "AI App",
      description: "Personalized sales recommendations and follow-up automation",
      status: "loading",
      tags: ["Sales", "Personalization", "CRM"]
    },
    {
      title: "Document Processing AI",
      category: "AI Agent",
      description: "Automated document analysis and data extraction",
      status: "loading",
      tags: ["Document AI", "OCR", "Analytics"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations with AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card border-border overflow-hidden"
            >
              <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                {project.status === 'loading' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm">
                    <div className="text-center">
                      <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Project details loading...</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more detailed case studies?</p>
          <div className="inline-flex items-center gap-2 text-primary">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Full portfolio coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};