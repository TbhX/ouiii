"use client";

import { MusicProvider } from "@/lib/contexts/music-context";

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MusicProvider>{children}</MusicProvider>;
}