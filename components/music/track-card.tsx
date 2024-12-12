"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useMusicPlayer } from "@/lib/contexts/music-context";

interface TrackCardProps {
  id: string;
  url: string;
  title: string;
  artist: string;
  coverUrl: string;
}

export function TrackCard({ id, url, title, artist, coverUrl }: TrackCardProps) {
  const { currentTrack, isPlaying, setCurrentTrack, togglePlayPause } = useMusicPlayer();

  const handlePlay = () => {
    if (currentTrack?.id === id) {
      togglePlayPause();
    } else {
      setCurrentTrack({ id, url, title, artist });
    }
  };

  const isCurrentTrack = currentTrack?.id === id;

  return (
    <Card className="group relative overflow-hidden bg-black/50 hover:bg-black/70 transition-all duration-300 border-green-900/50 hover:border-green-900">
      <div className="p-4 flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handlePlay}
          >
            {isCurrentTrack && isPlaying ? (
              <Pause className="h-8 w-8 text-green-400" />
            ) : (
              <Play className="h-8 w-8 text-green-400" />
            )}
          </Button>
        </div>
        <div>
          <h3 className="font-medium text-green-400">{title}</h3>
          <p className="text-sm text-gray-400">{artist}</p>
        </div>
      </div>
    </Card>
  );
}