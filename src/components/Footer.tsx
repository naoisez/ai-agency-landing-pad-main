import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin} from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AI Agency
            </h3>
            <p className="text-muted-foreground text-sm">
              Transforming businesses with cutting-edge AI solutions. 
              From voice agents to custom apps, we bring your ideas to life.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/smegersai/" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/smegers.ai/" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>

          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">AI Voice Agents</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Content Generation</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">AI App Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Our Portfolio</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ai.smegers@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Cork, Ireland</span>
              </div>
            </div>
            <a href="#contact">
            <Button variant="hero" className="mt-4 w-full" size="sm">
              Get Started Today
            </Button>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Smegers AI Agency. All rights reserved. Built with passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};