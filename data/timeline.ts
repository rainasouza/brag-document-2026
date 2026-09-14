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
      "Passei a atuar em todas as frentes. Nas tasks que apareciam sem muita urgência, eu tive a oportunidade de perguntar mais e conhecer mais sobre o nosso stack. Por exemplo, tasks envolvendo as VMs e a cloud do LSD.",
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
      "Contribuindo ao lado do OCA com o relatório automático (agora 'relatório personalizado'), indo em reuniões, entregando as novas estilizações pedidas pelo design e as novas features.",
  },
];
