const SocialProofBar = () => {
  const logos = [
    { name: "Netflix", opacity: 0.6 },
    { name: "Hulu", opacity: 0.6 },
    { name: "Amazon Prime", opacity: 0.6 },
    { name: "Spotify", opacity: 0.6 },
    { name: "Apple Music", opacity: 0.6 },
  ];

  return (
    <section className="py-12 border-y border-border/30 bg-card/30">
      <div className="section-container">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Our productions featured on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-lg md:text-xl font-bold text-foreground/40 hover:text-foreground/60 transition-colors cursor-default"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
