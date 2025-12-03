import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-gold opacity-50" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Global Online Music Production</span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-hero mb-6 animate-fade-up animation-delay-100">
            Your Songs.{" "}
            <span className="text-gradient-gold">World-Class</span>{" "}
            Production.
          </h1>

          {/* Subheadline */}
          <p className="body-large max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            From bedroom recordings to chart-ready tracks. Join thousands of artists 
            who've achieved over 300 million streams with TORS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Hear Our Work
            </Button>
            <Button variant="hero-outline" size="xl">
              How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up animation-delay-400">
            {[
              { value: "300M+", label: "Streams" },
              { value: "#1", label: "Chart Positions" },
              { value: "50+", label: "Countries" },
              { value: "1000s", label: "Songs Produced" },
            ].map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
