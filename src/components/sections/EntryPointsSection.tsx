import { Headphones, Zap, DollarSign, ArrowRight } from "lucide-react";

const EntryPointsSection = () => {
  const entryPoints = [
    {
      icon: Headphones,
      title: "Listen to Our Work",
      description: "Explore before & after transformations across genres",
      href: "#listen",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Zap,
      title: "How It Works",
      description: "Simple 4-step process from demo to release",
      href: "#how-it-works",
      gradient: "from-primary/15 to-transparent",
    },
    {
      icon: DollarSign,
      title: "View Pricing",
      description: "Transparent, instrument-based pricing",
      href: "#pricing",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <section className="py-24" id="explore">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Whether you're curious about the process, want to hear examples, or ready to start—we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {entryPoints.map((point, index) => (
            <a
              key={index}
              href={point.href}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(45_99%_66%_/_0.1)]"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="heading-card mb-3 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {point.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntryPointsSection;
