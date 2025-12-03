import { Globe, Award, Users, Music } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
      description: "Artists from every continent",
    },
    {
      icon: Award,
      value: "8+",
      label: "Years",
      description: "Industry experience",
    },
    {
      icon: Users,
      value: "30+",
      label: "Team Members",
      description: "Producers & engineers",
    },
    {
      icon: Music,
      value: "5000+",
      label: "Projects",
      description: "Songs delivered",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Who We Are
            </span>
            <h2 className="heading-section mb-6">
              A Global Team of{" "}
              <span className="text-gradient-gold">Music Creators</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                TORS (The Online Recording Studio) is a global music production company 
                that has helped thousands of independent singer-songwriters bring their 
                music to life.
              </p>
              <p className="leading-relaxed">
                Our team of producers, engineers, and session musicians spans the globe, 
                working together to deliver world-class productions that compete with 
                major label releases.
              </p>
              <p className="leading-relaxed">
                From chart-topping hits to Netflix sync placements, our work speaks for 
                itself—with over 300 million streams and counting.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["Netflix", "Hulu", "Amazon Prime", "iTunes #1"].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-gradient-gold mb-1">
                  {item.value}
                </div>
                <div className="font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
