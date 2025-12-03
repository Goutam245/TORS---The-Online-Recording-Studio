import { useState, useRef, useEffect, useMemo } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterPlayerProps {
  title: string;
  artist: string;
  genre: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterPlayer = ({
  title,
  artist,
  genre,
  beforeLabel = "Demo",
  afterLabel = "Produced",
}: BeforeAfterPlayerProps) => {
  const [isAfter, setIsAfter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Generate consistent waveform heights
  const waveformHeights = useMemo(() => 
    Array.from({ length: 50 }).map(() => 20 + Math.random() * 60), 
  []);

  // Simulated playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setProgress(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="glass-card p-6 group">
      {/* Track Info */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="font-bold text-lg text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          {genre}
        </span>
      </div>

      {/* Waveform Visualization */}
      <div className="relative h-20 mb-6 flex items-center justify-center gap-[3px] px-2">
        {waveformHeights.map((height, i) => {
          const isFilled = (i / 50) * 100 <= progress;
          return (
            <div
              key={i}
              className={cn(
                "w-1.5 rounded-full transition-all duration-200",
                isFilled 
                  ? isAfter 
                    ? "bg-primary shadow-[0_0_8px_hsl(45_99%_66%_/_0.5)]" 
                    : "bg-primary/70" 
                  : "bg-muted/50",
                isPlaying && isFilled && "animate-pulse"
              )}
              style={{
                height: `${height}%`,
                transitionDelay: `${i * 10}ms`,
              }}
            />
          );
        })}
        {/* Progress overlay glow */}
        <div 
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(90deg, transparent, hsl(45 99% 66% / 0.1))'
          }}
        />
      </div>

      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="audio-track mb-6 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div
          className="audio-track-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Before/After Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAfter(false)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              !isAfter
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {beforeLabel}
          </button>
          
          {/* Toggle Switch */}
          <button
            onClick={() => setIsAfter(!isAfter)}
            className="relative w-14 h-8 rounded-full bg-muted p-1 transition-colors"
          >
            <div
              className={cn(
                "absolute w-6 h-6 rounded-full bg-primary shadow-lg transition-all duration-300",
                isAfter ? "left-7" : "left-1"
              )}
            />
          </button>
          
          <button
            onClick={() => setIsAfter(true)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              isAfter
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {afterLabel}
          </button>
        </div>

        {/* Volume */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Status Indicator */}
      <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-center gap-3">
        <div className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300",
          isAfter 
            ? "bg-primary/10 border border-primary/30" 
            : "bg-muted/30 border border-border/30"
        )}>
          <span className={cn(
            "w-2 h-2 rounded-full transition-colors",
            isAfter ? "bg-primary animate-pulse" : "bg-muted-foreground"
          )} />
          <span className={cn(
            "text-xs font-medium transition-colors",
            isAfter ? "text-primary" : "text-muted-foreground"
          )}>
            {isAfter ? "Professional Production" : "Original Demo"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterPlayer;
