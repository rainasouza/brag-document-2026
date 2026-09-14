export type ThemeId = "floral" | "ocean" | "forest" | "mono";

export const themes: { id: ThemeId; label: string }[] = [
  { id: "floral", label: "Floral" },
  { id: "ocean", label: "Oceano" },
  { id: "forest", label: "Floresta" },
  { id: "mono", label: "Minimal" },
];

export const siteConfig: {
  theme: ThemeId;
  showThemeSwitcher: boolean;
} = {
  theme: "floral",
  showThemeSwitcher: true,
};

// Todos os textos de interface num só lugar para facilitar a tradução
// e o reuso deste projeto como template.
export const uiStrings = {
  expandDetails: "Ver problema, ação e resultado",
  collapseDetails: "Ver menos",
  viewOnGitHub: "Ver no GitHub",
  now: "agora",
  print: "Imprimir / salvar em PDF",
  switchTheme: "Trocar tema de cor",
};
