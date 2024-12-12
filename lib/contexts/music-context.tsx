"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Track {
  id: string;
  url: string;
  title: string;
  artist: string;
}

interface MusicContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  setCurrentTrack: (track: Track) => void;
  togglePlayPause: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        setCurrentTrack,
        togglePlayPause,
      }}
    >
      {children}
      {currentTrack && <MusicPlayer />}
    </MusicContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusicPlayer must be used within a MusicProvider");
  }
  return context;
}