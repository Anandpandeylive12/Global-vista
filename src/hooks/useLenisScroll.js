"use client";

import { useEffect } from "react";

export function useLenisScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);
}