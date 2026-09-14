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
};

export const projects: Project[] = [
  {
    id: "jinja-to-react-ssr",
    name: "Migração de Jinja para React SSR",
    repo: "OCA-UFCG/Automatic-Reporting",
    context:
      "Os relatórios em PDF do Automatic Reporting eram gerados a partir de um HTML produzido inteiramente por um motor de templates Jinja2.",
    problem:
      "Todo o layout do relatório vivia dentro de uma única string Python de mais de 1300 linhas (TEMPLATE_STRING), processada com Jinja2 — sem nenhuma componentização, o que tornava qualquer mudança de layout arriscada e difícil de revisar.",
    whatIDid: [
      "Removi a dependência do Jinja2 e o template monolítico de utils/renderer.py",
      "Criei uma pipeline de Server-Side Rendering em React, quebrando o template em componentes (Cover, Report, ThemeDetail, Brand, PdfLayout)",
      "Adicionei um ponto de entrada de SSR (ssr-entry.jsx) e um novo módulo utils/ssr.py, gerando o HTML que o WeasyPrint converte em PDF",
    ],
    impact:
      "A troca por componentes React tornou o desenvolvimento das features seguintes (multi-tema, redesign do encerramento, novos gráficos) muito mais rápido e seguro, por permitir reaproveitar e testar pedaços de UI isoladamente em vez de editar uma string HTML gigante.",
    techs: ["React", "Vite", "Python", "WeasyPrint"],
    link: "https://github.com/OCA-UFCG/Automatic-Reporting/commit/8a807b5b76c9dd0fbc2705d5337af16330f715d4",
  },
  {
    id: "performance-pipeline",
    name: "Automatic Reporting — Performance & Pipeline de Dados",
    repo: "OCA-UFCG/Automatic-Reporting",
    context:
      "O Automatic Reporting gera relatórios em PDF por município a partir de dados de múltiplas fontes (censo, saúde, educação, economia) combinados com conteúdo narrativo escrito em Google Docs.",
    problem:
      "A geração de cada PDF levava até 22 segundos apenas na renderização com WeasyPrint, e o pipeline completo chegava a 16–18 segundos por relatório.",
    whatIDid: [
      "Removi todo uso de display: flex do CSS do relatório — o maior custo de renderização no WeasyPrint — substituindo por combinações de table/table-cell/block que preservam o mesmo layout visual",
      "Troquei a geração de PDF de assíncrona para síncrona, para a resposta da API só retornar com o PDF pronto",
      "Adicionei cache LRU com TTL para renderizações SSR repetidas no mesmo dia",
      "Corrigi um bug de correspondência de slug que impedia relatórios já gerados de aparecerem no frontend",
    ],
    impact:
      "Reduzi bastante o tempo de renderização naquele momento. Parte desse ganho foi depois impactada por mudanças subsequentes no pipeline, então não reflete mais o número atual — o aprendizado sobre os gargalos do WeasyPrint continua valendo.",
    techs: ["Python", "FastAPI", "WeasyPrint", "httpx"],
    link: "https://github.com/OCA-UFCG/Automatic-Reporting/pull/52",
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
  },
  {
    id: "design-cms",
    name: "Data Nordeste Frontend — Design System & CMS",
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
  },
  {
    id: "sap-frontend",
    name: "SAP Frontend",
    repo: "OCA · sap-frontend",
    context: "[ADICIONAR CONTEXTO DO PROJETO SAP FRONTEND]",
    problem: "[ADICIONAR PROBLEMA QUE O PROJETO RESOLVIA]",
    whatIDid: ["[ADICIONAR O QUE VOCÊ FEZ NO PROJETO SAP FRONTEND]"],
    impact: "[ADICIONAR RESULTADO/IMPACTO]",
    techs: ["[ADICIONAR TECNOLOGIAS]"],
    link: "[ADICIONAR LINK — PR, ISSUE OU REPOSITÓRIO]",
  },
];
