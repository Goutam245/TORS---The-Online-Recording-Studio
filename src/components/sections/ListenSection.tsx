import BeforeAfterPlayer from "@/components/audio/BeforeAfterPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ListenSection = () => {
  const tracks = [
    {
      title: "Midnight Dreams",
      artist: "Sarah Mitchell",
      genre: "Pop",
    },
    {
      title: "Breaking Through",
      artist: "James Walker",
      genre: "Rock",
    },
    {
      title: "Ocean Waves",
      artist: "Luna Martinez",
      genre: "Indie Folk",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30" id="listen">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Before & After
          </span>
          <h2 className="heading-section mb-4">
            Hear the <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Toggle between original demos and polished productions. 
            Experience what professional production sounds like.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {tracks.map((track, index) => (
            <BeforeAfterPlayer
              key={index}
              title={track.title}
              artist={track.artist}
              genre={track.genre}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Explore More Tracks
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ListenSection;
