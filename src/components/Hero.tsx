import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-primary font-medium">AI-Powered Solutions</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Turn Ideas Into{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Profitable Products
            </span>{" "}
            In 30 Days
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help businesses get more leads by building custom AI tools and agents that work 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </a>
          </div>
          
          <div className="mt-16">
            <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="h-12 w-32 bg-muted rounded animate-shimmer" />
              <div className="h-12 w-28 bg-muted rounded animate-shimmer" />
              <div className="h-12 w-36 bg-muted rounded animate-shimmer" />
              <div className="h-12 w-24 bg-muted rounded animate-shimmer" />
              <div className="h-12 w-32 bg-muted rounded animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



