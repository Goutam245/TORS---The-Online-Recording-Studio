import { Mic, Music2, Headphones, Radio, Sparkles, Trophy } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Music2,
      title: "Full Production",
      description: "Complete instrumental production from scratch based on your demo",
    },
    {
      icon: Mic,
      title: "Vocal Production",
      description: "Professional vocal tuning, harmonies, and effects",
    },
    {
      icon: Headphones,
      title: "Mix & Master",
      description: "Industry-standard mixing and mastering for streaming platforms",
    },
    {
      icon: Radio,
      title: "Sync Ready",
      description: "Productions formatted for TV, film, and advertising placements",
    },
    {
      icon: Sparkles,
      title: "Songwriting",
      description: "Collaborative songwriting and topline services available",
    },
    {
      icon: Trophy,
      title: "A&R Consultation",
      description: "Guidance on sound direction and release strategy",
    },
  ];

  return (
    <section className="py-24" id="services">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="heading-section mb-4">
            Full-Service <span className="text-gradient-gold">Production</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Everything you need to take your song from idea to release.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
