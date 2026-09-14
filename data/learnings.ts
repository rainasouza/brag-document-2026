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
      "Aprofundei o trabalho com JavaScript, Python e FastAPI no pipeline de geração de relatórios, incluindo cache, requisições assíncronas e integração com PostgreSQL",
      "Ganhei experiência prática com as particularidades de renderização do WeasyPrint (custo de flexbox, tratamento de margin/padding em quebras de página)",
    ],
  },
  {
    id: "architecture",
    title: "Arquitetura e desenvolvimento",
    items: [
      "Trabalhei em uma feature ponta a ponta (geração de relatórios multi-tema) e exigiu mudanças coordenadas entre backend (Automatic-Reporting) e frontend (data-nordeste-frontend)",
      "Pratiquei a integração de um CMS headless (Contentful) mantendo fallback estático para não depender totalmente de conteúdo externo (data-nordeste-frontend)",
      "Mudança de engine de Jinja2 para React SSR"
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    items: [
      "Escrevi testes e componentes documentados com Vitest e Storybook no SAP-frontend, isolando estados visuais (hover, ativo, loading) fora do fluxo manual de QA",
      "Tive contato direto com VMs e a cloud do LSD, entendendo como o ambiente de infraestrutura do time se conecta com o que eu desenvolvo",
      "Aprendi a revisar PRs grandes com diffs pouco claros (como o TEMPLATE_STRING monolítico) e a quebrar entregas em PRs menores e mais fáceis de revisar",
    ],
  },
  {
    id: "process",
    title: "Processos",
    items: [
      "Aprendi a lidar com tasks sem prioridade definida como oportunidade. Usei esses momentos para me aprofundar no stack e na infraestrutura, em vez de só esperar a próxima demanda urgente",
      "Passei a planejar migrações e refatorações de forma incremental, mantendo compatibilidade retroativa (ex: formato antigo de macrotema) para não quebrar o que já estava em produção",
    ],
  },
  {
    id: "communication",
    title: "Comunicação e trabalho em equipe",
    items: [
      "Passei a participar de reuniões com o time do OCA, alinhando prioridades e decisões técnicas diretamente com quem depende das entregas",
      "Trabalhei lado a lado com o time de design, traduzindo especificações do Figma em componentes fiéis pixel a pixel e negociando ajustes quando a implementação exigia adaptações",
    ],
  },
];
