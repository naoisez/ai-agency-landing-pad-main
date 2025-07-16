import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

export const BookingSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Get <span className="bg-gradient-hero bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a free consultation call to discuss your project and see how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Schedule Your Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://calendly.com/ai-smegers/30min"
                    height="380"
                    frameBorder="0"
                    className="w-full rounded-lg"
                  ></iframe>
                </div>

                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">15-30 Minutes</p>
                    <p className="text-sm text-muted-foreground">Free consultation</p>
                  </div>
                  <div className="text-center">
                    <Video className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">Video Call</p>
                    <p className="text-sm text-muted-foreground">Google Meet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-card border-border min-h-[200px]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">What You'll Get:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-sm">Detailed project analysis and feasibility assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-sm">Custom AI solution recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-sm">Timeline and budget estimation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-sm">ROI projections and business impact analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-primary border-none text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">No Commitment Required</h3>
                  <p className="text-sm opacity-90">
                    This is a completely free consultation with no strings attached. 
                    We'll provide valuable insights regardless of whether you choose to work with us.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};