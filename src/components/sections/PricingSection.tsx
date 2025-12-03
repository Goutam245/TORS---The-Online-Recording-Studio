import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Music, Mic2, Guitar, Piano, Drum } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const instruments = [
    { icon: Drum, name: "Drums", price: "$150", description: "Full kit production" },
    { icon: Guitar, name: "Bass", price: "$100", description: "Electric or synth" },
    { icon: Guitar, name: "Guitars", price: "$120", description: "Acoustic or electric" },
    { icon: Piano, name: "Keys", price: "$100", description: "Piano, synths, pads" },
    { icon: Music, name: "Strings", price: "$180", description: "Full arrangement" },
    { icon: Mic2, name: "Vocals", price: "$200", description: "Tuning & production" },
  ];

  const exampleBuild = {
    title: "Typical Pop Track",
    description: "A complete modern pop production",
    items: [
      { name: "Drums & Percussion", price: 150 },
      { name: "Bass", price: 100 },
      { name: "Guitars", price: 120 },
      { name: "Keys & Synths", price: 100 },
      { name: "Vocal Production", price: 200 },
      { name: "Mix & Master", price: 200 },
    ],
    total: 870,
  };

  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background" id="pricing">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="heading-section mb-4">
            Pay Per <span className="text-gradient-gold">Instrument</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Build your track your way. Only pay for what you need—no packages, no surprises.
          </p>
        </div>

        {/* Instrument Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {instruments.map((instrument, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <instrument.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{instrument.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">{instrument.description}</p>
              <div className="text-xl font-extrabold text-gradient-gold">
                {instrument.price}
              </div>
            </div>
          ))}
        </div>

        {/* Example Build Card */}
        <div className="max-w-xl mx-auto">
          <div className="relative glass-card p-8 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  Example Build
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{exampleBuild.title}</h3>
              <p className="text-muted-foreground mb-6">{exampleBuild.description}</p>

              <div className="space-y-3 mb-6">
                {exampleBuild.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-3xl font-extrabold text-gradient-gold">
                  ${exampleBuild.total}
                </span>
              </div>

              <Button variant="hero" size="lg" className="w-full mt-6">
                Get Your Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          No hidden fees. Pay only for instruments you need. Mix & master included in every project.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
