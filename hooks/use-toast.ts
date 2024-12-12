"use client";

import { toast as sonnerToast } from "sonner";

export function useToast() {
  return {
    toast: (title: string, description?: string) => {
      sonnerToast(title, {
        description,
      });
    },
  };
}