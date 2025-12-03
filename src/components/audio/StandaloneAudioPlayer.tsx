import { useState, useMemo } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface StandaloneAudioPlayerProps {
  title: string;
  artist: string;
  albumArt?: string;
  genre: string;
  duration?: string;
}

const StandaloneAudioPlayer = ({
  title,
  artist,
  genre,
  duration = "3:42",
}: StandaloneAudioPlayerProps) => {
  const [isAfter, setIsAfter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [isMuted, setIsMuted] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  // Generate consistent waveform heights
  const waveformHeights = useMemo(
    () => Array.from({ length: 80 }).map(() => 15 + Math.random() * 70),
    []
  );

  const formatTime = (percentage: number) => {
    const totalSeconds = 222; // 3:42 in seconds
    const currentSeconds = Math.floor((percentage / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-muted/20 border border-border/50 p-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {genre}
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground">{artist}</p>
          </div>

          {/* Before/After Toggle - Premium Design */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Compare
            </span>
            <div className="relative flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border/50">
              <button
                onClick={() => setIsAfter(false)}
                className={cn(
                  "relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  !isAfter ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Before
              </button>
              <button
                onClick={() => setIsAfter(true)}
                className={cn(
                  "relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isAfter ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                After
              </button>
              {/* Sliding background */}
              <div
                className={cn(
                  "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary transition-all duration-300 ease-out",
                  isAfter ? "left-[calc(50%+2px)]" : "left-1"
                )}
              />
            </div>
          </div>
        </div>

        {/* Waveform Visualization */}
        <div className="relative h-24 mb-6">
          <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
            {waveformHeights.map((height, i) => {
              const isFilled = (i / waveformHeights.length) * 100 <= progress;
              return (
                <div
                  key={i}
                  className={cn(
                    "w-1 rounded-full transition-all duration-300",
                    isFilled
                      ? isAfter
                        ? "bg-primary"
                        : "bg-primary/60"
                      : "bg-muted/40",
                    isPlaying && isFilled && "animate-pulse"
                  )}
                  style={{
                    height: `${height}%`,
                    transitionDelay: `${i * 5}ms`,
                  }}
                />
              );
            })}
          </div>
          
          {/* Click area for seeking */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              setProgress((x / rect.width) * 100);
            }}
          />
        </div>

        {/* Time Display */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <span className="font-mono">{formatTime(progress)}</span>
          <span className="font-mono">{duration}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Left - Volume */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <div className="w-20 h-1 rounded-full bg-muted/50 overflow-hidden">
              <div
                className="h-full bg-muted-foreground/50 rounded-full transition-all"
                style={{ width: isMuted ? "0%" : `${sliderValue}%` }}
              />
            </div>
          </div>

          {/* Center - Playback Controls */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                isPlaying
                  ? "bg-primary text-primary-foreground shadow-[0_0_30px_hsl(45_99%_66%_/_0.4)]"
                  : "bg-primary text-primary-foreground hover:scale-105 hover:shadow-[0_0_30px_hsl(45_99%_66%_/_0.4)]"
              )}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current ml-1" />
              )}
            </button>

            <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Right - Quality Indicator */}
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
                isAfter
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-muted/50 text-muted-foreground border border-border/50"
              )}
            >
              {isAfter ? "HD Audio" : "Demo"}
            </span>
          </div>
        </div>

        {/* Mode description */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            {isAfter ? (
              <>
                <span className="text-primary font-medium">Professional Production</span> — Mixed, mastered, and ready for release
              </>
            ) : (
              <>
                <span className="font-medium">Original Demo</span> — Raw recording before production
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandaloneAudioPlayer;
