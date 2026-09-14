"use client";

import { useState } from "react";
import { siteConfig, themes, uiStrings, type ThemeId } from "@/data/site";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    if (typeof window === "undefined") return siteConfig.theme;
    const saved = window.localStorage.getItem("brag-theme");
    const valid = themes.some((t) => t.id === saved);
    const initial = valid ? (saved as ThemeId) : siteConfig.theme;
    document.documentElement.dataset.theme = initial;
    return initial;
  });

  if (!siteConfig.showThemeSwitcher) return null;

  const current = themes.find((t) => t.id === theme) ?? themes[0];

  const cycleTheme = () => {
    const index = themes.findIndex((t) => t.id === theme);
    const next = themes[(index + 1) % themes.length];
    setTheme(next.id);
    document.documentElement.dataset.theme = next.id;
    localStorage.setItem("brag-theme", next.id);
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`${uiStrings.switchTheme} (atual: ${current.label})`}
      title={`${uiStrings.switchTheme} (atual: ${current.label})`}
      className="no-print fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/85 px-4 py-2 text-sm font-medium text-ink shadow-lg shadow-ink/10 backdrop-blur transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span aria-hidden className="h-3.5 w-3.5 rounded-full bg-accent" />
      {current.label}
    </button>
  );
}
