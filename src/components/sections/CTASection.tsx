import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Ready to Transform{" "}
            <span className="text-gradient-gold">Your Music?</span>
          </h2>
          
          <p className="body-large mb-10">
            Book a free 15-minute consultation call. We'll discuss your project, 
            answer questions, and create a custom plan for your track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Call
            </Button>
            <Button variant="hero-outline" size="xl">
              Send Your Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No commitment required. Let's talk about your music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
