export type Project = {
  id: string;
  name: string;
  repo: string;
  context: string;
  problem: string;
  whatIDid: string[];
  impact: string;
  techs: string[];
  link: string;
  spotlight?: string;
  dateLabel: string;
  shortName: string;
  deepDiveIds?: string[];
};

export const projects: Project[] = [
  {
    id: "jinja-to-react-ssr",
    name: "Migração de Jinja para React SSR",
    repo: "OCA-UFCG/Automatic-Reporting",
    context:
      "Os relatórios em PDF do Automatic Reporting eram gerados a partir de um HTML produzido inteiramente por um motor de templates Jinja2 no backend. Propus a troca para React SSR por manutenibilidade e escala: o template já passava de 1300 linhas, só quem conhecia Python conseguia mexer, e o time já dominava React no frontend. A ideia era trazer o relatório para uma stack conhecida, onde mais gente pudesse contribuir.",
    problem:
      "Todo o layout do relatório vivia dentro de uma única string Python (TEMPLATE_STRING) em utils/renderer.py, sem componentização, sem preview e sem reuso. Qualquer mudança de layout era arriscada e difícil de revisar: um PR gigante numa string, sem diff visual claro. Isso travava a evolução: novos temas, novo encerramento e novos gráficos iam custar cada vez mais caro.",
    whatIDid: [
      "Propus e implementei a migração de ponta a ponta. Era a primeira vez que eu fazia SSR, então validei a abordagem com um protótipo antes de remover o Jinja2",
      "Removi a dependência do Jinja2 e o template monolítico de utils/renderer.py",
      "Quebrei o layout em componentes React reutilizáveis (Cover, Report, ThemeDetail, Brand, PdfLayout)",
      "Criei a nova pipeline de renderização (ssr-entry.jsx + utils/ssr.py) que gera o HTML consumido pelo WeasyPrint, mantendo paridade visual com o PDF antigo",    ],
    spotlight:
      "Documentei todo o relatório no Coda por iniciativa própria, para deixar esse conhecimento acessível ao time, e pretendo manter a documentação atualizada",
    impact:
      "O relatório passou de uma string gigante para componentes isolados e reaproveitáveis. Isso destravou tudo que veio depois: multi-tema, redesign do encerramento, novos gráficos, e deixou as mudanças muito mais rápidas e seguras de revisar: em vez de caçar HTML dentro de Python, dá para mexer e testar cada pedaço de UI separadamente, inclusive por quem vem do frontend.",
    techs: ["React", "Vite", "Python", "WeasyPrint"],
    link: "https://github.com/OCA-UFCG/Automatic-Reporting/commit/8a807b5b76c9dd0fbc2705d5337af16330f715d4",
    dateLabel: "Maio de 2026",
    shortName: "Jinja → React SSR",
  },
  {
    id: "performance-pipeline",
    name: "Automatic Reporting: Performance & Pipeline de Dados",
    repo: "OCA-UFCG/Automatic-Reporting",
    context:
      "O Automatic Reporting gera relatórios em PDF por município a partir de dados de múltiplas fontes (censo, saúde, educação, economia) combinados com conteúdo narrativo escrito em Google Docs.",
    problem:
      "A geração de cada PDF levava até 22 segundos apenas na renderização com WeasyPrint, e o pipeline completo chegava a 16–18 segundos por relatório.",
    whatIDid: [
      "Removi todo uso de display: flex do CSS do relatório, o maior custo de renderização no WeasyPrint, substituindo por combinações de table/table-cell/block que preservam o mesmo layout visual",
      "Troquei a geração de PDF de assíncrona para síncrona, para a resposta da API só retornar com o PDF pronto",
      "Adicionei cache LRU com TTL para renderizações SSR repetidas no mesmo dia",
      "Corrigi um bug de correspondência de slug que impedia relatórios já gerados de aparecerem no frontend",
    ],
    impact:
      "Reduzi bastante o tempo de renderização naquele momento. Parte desse ganho foi depois impactada por mudanças subsequentes no pipeline, então não reflete mais o número atual, mas o aprendizado sobre os gargalos do WeasyPrint continua valendo.",
    techs: ["Python", "FastAPI", "WeasyPrint", "httpx"],
    link: "https://github.com/OCA-UFCG/Automatic-Reporting/pull/52",
    dateLabel: "Agosto de 2026",
    shortName: "Performance & Pipeline",
    deepDiveIds: ["weasyprint-performance", "field-mismatch"],
  },
  {
    id: "multi-tema",
    name: "Geração de Relatórios Multi-tema",
    repo: "OCA-UFCG/Automatic-Reporting + data-nordeste-frontend",
    context:
      "Antes, cada relatório automático cobria apenas um macrotema (por exemplo, Saúde ou Educação) por vez.",
    problem:
      "Quem precisava comparar múltiplos temas de um mesmo município tinha que gerar e abrir vários PDFs separados.",
    whatIDid: [
      "No backend, adaptei a geração de relatório para aceitar múltiplos slugs de macrotema, renderizando os dados do município uma única vez e concatenando as seções de cada tema escolhido",
      "No frontend, troquei o seletor único por checkboxes de multi-seleção no formulário de geração de relatório",
      "Mantive compatibilidade retroativa com o formato antigo (\"todos\") para não quebrar PDFs já gerados",
    ],
    impact:
      "Passou a ser possível gerar um único PDF cobrindo qualquer combinação de temas, em vez de relatórios separados por tema.",
    techs: ["Python", "FastAPI", "TypeScript", "Next.js", "React"],
    link: "https://github.com/OCA-UFCG/Automatic-Reporting/pull/46",
    dateLabel: "Julho de 2026",
    shortName: "Relatórios Multi-tema",
  },
  {
    id: "design-cms",
    name: "Data Nordeste Frontend: Design System & CMS",
    repo: "OCA-UFCG/data-nordeste-frontend",
    context:
      "O Data Nordeste Frontend é a aplicação Next.js que apresenta dashboards, publicações e relatórios por macrotema para os municípios do Nordeste.",
    problem:
      "Parte do conteúdo da página de relatórios estava fixo no código, e algumas telas tinham divergências visuais em relação ao design definido no Figma.",
    whatIDid: [
      "Integrei a página de relatórios ao Contentful, migrando banner, descrição e subtítulos de seção de conteúdo fixo para um content type gerenciável no CMS, com fallback estático",
      "Refiz o encerramento do relatório em PDF (fontes, conteúdos relacionados e CTA) para bater pixel a pixel com o Figma, incluindo o tratamento correto de quebra de página",
      "Corrigi alinhamentos, layout mobile e ordenação de macrotemas em diversos ajustes finos de UI",
    ],
    impact:
      "Página de relatórios com conteúdo editável via CMS sem necessidade de deploy, e telas de relatório/tema visualmente alinhadas ao design aprovado.",
    techs: ["Next.js", "TypeScript", "Contentful", "Radix UI", "Tailwind CSS"],
    link: "https://github.com/OCA-UFCG/data-nordeste-frontend/pull/301",
    dateLabel: "Julho – Setembro de 2026",
    shortName: "Design System & CMS",
    deepDiveIds: ["page-break"],
  },
  {
    id: "sap-frontend",
    name: "SAP Frontend: Análise Multicriterial",
    repo: "OCA-UFCG/SAP-frontend",
    context:
      "O SAP Frontend é a plataforma Next.js do OCA que apresenta dados espaciais e institucionais, camadas via Contentful e renderização de mapas (MapLibre/Leaflet + Earth Engine), com fluxos de análise territorial e análise multicriterial.",
    problem:
      "A interface da plataforma tinha lacunas de fidelidade ao Figma, estados de navegação inconsistentes e faltavam componentes-chave para a jornada de análise (painel lateral, acordeões, cards de monitoramento e modal de detalhes).",
    whatIDid: [
      "Integrei a plataforma ao Contentful e estruturei o AccordionContext e o PlatformSideRail com estados de hover/ativo e espaçamentos fiéis ao Figma",
      "Criei os cards de monitoramento (MonitoringCard/DroughtDataset) com toggle de camada, escala temporal e botão de informações, além do InfoModal acessível com portal, bloqueio de scroll e fechamento por ESC",
      "Implementei evoluções da análise territorial, card de Informações Gerais dinâmico, correção de tipagem multicriteria, estados de seleção/análise, classificação por município/estado e escala temporal, com ajustes de layout e responsividade pixel a pixel",
    ],
    impact:
      "Plataforma com navegação e painel lateral consistentes, componentes reaproveitáveis (cards, acordeão, modal) e fluxo de análise multicriterial mais estável e alinhado ao design, reduzindo retrabalho nas entregas seguintes de mapa e análise.",
    techs: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Contentful",
      "MapLibre",
      "Vitest",
      "Storybook",
    ],
    link: "https://github.com/OCA-UFCG/SAP-frontend/pull/51",
    dateLabel: "Fevereiro – Maio de 2026",
    shortName: "SAP Frontend",
  },
];
