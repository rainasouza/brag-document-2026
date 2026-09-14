export type LearningCategory = {
  id: string;
  title: string;
  items: string[];
};

export const learningCategories: LearningCategory[] = [
  {
    id: "technical",
    title: "Conhecimento técnico",
    items: [
      "Aprofundei o trabalho com Python e FastAPI no pipeline de geração de relatórios, incluindo cache, requisições assíncronas com httpx e integração com PostgreSQL",
      "Ganhei experiência prática com as particularidades de renderização do WeasyPrint (custo de flexbox, tratamento de margin/padding em quebras de página)",
      "[ADICIONAR OUTRO APRENDIZADO TÉCNICO]",
    ],
  },
  {
    id: "architecture",
    title: "Arquitetura e desenvolvimento",
    items: [
      "Trabalhei em uma feature ponta a ponta — geração de relatórios multi-tema — que exigiu mudanças coordenadas entre backend (Automatic-Reporting) e frontend (data-nordeste-frontend)",
      "Pratiquei a integração de um CMS headless (Contentful) mantendo fallback estático para não depender totalmente de conteúdo externo",
      "[ADICIONAR OUTRO APRENDIZADO DE ARQUITETURA]",
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    items: [
      "[ADICIONAR APRENDIZADO SOBRE FERRAMENTAS — ex: CI/CD, observabilidade, testes]",
    ],
  },
  {
    id: "process",
    title: "Processos",
    items: ["[ADICIONAR APRENDIZADO SOBRE PROCESSOS DE TRABALHO/TIME]"],
  },
  {
    id: "communication",
    title: "Comunicação e trabalho em equipe",
    items: [
      "[ADICIONAR APRENDIZADO SOBRE COMUNICAÇÃO E COLABORAÇÃO COM O TIME]",
    ],
  },
];
