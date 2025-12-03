import StandaloneAudioPlayer from "@/components/audio/StandaloneAudioPlayer";

const AudioPlayerShowcase = () => {
  return (
    <section className="py-24 bg-card/30" id="audio-player">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Interactive Preview
          </span>
          <h2 className="heading-section mb-4">
            Before & After <span className="text-gradient-gold">Player</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Experience the transformation instantly. Toggle between demo and produced versions with our intuitive audio comparison tool.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <StandaloneAudioPlayer
            title="Ocean Waves"
            artist="Luna Martinez"
            genre="Indie Pop"
            duration="3:42"
          />
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            {
              title: "Instant Toggle",
              description: "Switch between versions seamlessly while the track plays",
            },
            {
              title: "Visual Waveform",
              description: "See the audio quality difference in real-time visualization",
            },
            {
              title: "Mobile Optimized",
              description: "Full functionality on any device, anywhere",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioPlayerShowcase;
