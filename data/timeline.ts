export type TimelineStep = {
  id: string;
  label: string;
  date: string;
  description: string;
};

export const timeline: TimelineStep[] = [
  {
    id: "inicio",
    label: "Início",
    date: "Fevereiro de 2026",
    description:
      "Primeiros PRs de ajuste de layout e alinhamento no data-nordeste-frontend.",
  },
  {
    id: "desenvolvimento",
    label: "Desenvolvimento",
    date: "Maio – Junho de 2026",
    description:
      "Passei a atuar também no backend do Automatic Reporting (Python/FastAPI), além do frontend em Next.js.",
  },
  {
    id: "desafio",
    label: "Desafio",
    date: "Julho – Agosto de 2026",
    description:
      "Resolvi o gargalo de performance na geração de PDF (70% mais rápido) e implementei a geração de relatórios multi-tema.",
  },
  {
    id: "atualmente",
    label: "Atualmente",
    date: "Setembro de 2026",
    description:
      "Contribuindo em ambos os repositórios: novos dados (economia, meio ambiente) e integração com Contentful.",
  },
];
