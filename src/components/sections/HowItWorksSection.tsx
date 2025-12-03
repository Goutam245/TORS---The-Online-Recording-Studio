import { Upload, MessageSquare, Music, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Send Your Demo",
      description: "Upload your rough recording or voice memo. Any quality works—we've heard it all.",
    },
    {
      icon: MessageSquare,
      step: "02",
      title: "Discuss Your Vision",
      description: "Chat with our production team about your sound, references, and goals.",
    },
    {
      icon: Music,
      step: "03",
      title: "We Produce",
      description: "Our world-class team transforms your demo with professional instruments and mixing.",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Release Ready",
      description: "Receive your mastered track, ready for Spotify, Apple Music, and beyond.",
    },
  ];

  return (
    <section className="py-24" id="how-it-works">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Process
          </span>
          <h2 className="heading-section mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            From bedroom recording to release-ready track in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="text-6xl font-extrabold text-muted/30 absolute -top-4 -left-2 select-none">
                  {step.step}
                </div>
                
                {/* Card Content */}
                <div className="relative bg-card/50 border border-border/50 rounded-2xl p-6 pt-12 transition-all duration-500 hover:border-primary/30 hover:bg-card">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="heading-card mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
