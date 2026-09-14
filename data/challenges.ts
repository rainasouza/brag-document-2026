export type Challenge = {
  id: string;
  title: string;
  problem: string;
  action: string;
  result: string;
};

export const challenges: Challenge[] = [
  {
    id: "weasyprint-performance",
    title: "PDF muito mais lento do que deveria",
    problem:
      "A geração de cada relatório em PDF levava até 22 segundos, com display: flex sendo o maior custo de renderização no WeasyPrint.",
    action:
      "Reescrevi o CSS do relatório removendo todo uso de flexbox, substituindo por combinações de table/table-cell/block que preservam o mesmo layout visual, e tornei a geração de PDF síncrona.",
    result:
      "Reduzi significativamente o tempo de renderização naquele momento. Parte desse ganho foi depois impactada por mudanças subsequentes no pipeline, então não é mais o número atual — mas o trabalho de identificar e eliminar o gargalo se manteve útil.",
  },
  {
    id: "field-mismatch",
    title: "23 campos que não batiam entre banco e relatório",
    problem:
      "Ao implementar os gráficos do tema Economia e Renda, os placeholders do documento (como economia.$campo) não eram substituídos, porque os nomes de campo no banco divergiam dos nomes usados no template do relatório.",
    action:
      "Mapeei e corrigi 23 divergências de nome de campo entre a view de perfil econômico e o documento, além de criar um helper genérico para consultar views de perfil municipal sem desempacotar colunas manualmente.",
    result:
      "Relatório gerado para múltiplos municípios reais sem nenhum marcador de gráfico ou variável não substituída.",
  },
  {
    id: "page-break",
    title: "Conteúdo quebrando no meio da página do PDF",
    problem:
      "Ao redesenhar a seção de encerramento do relatório (fontes, conteúdos relacionados e CTA), blocos que não cabiam na página eram cortados no meio — e a margem superior desaparecia quando um elemento iniciava uma nova página, um comportamento específico do WeasyPrint, que descarta margin nesse caso.",
    action:
      "Apliquei break-inside: avoid para empurrar blocos inteiros para a próxima página quando necessário, e troquei margin por padding para garantir o espaçamento no topo da página em qualquer cenário de quebra.",
    result:
      "Layout do encerramento do relatório validado pixel a pixel contra o Figma, incluindo os cenários de quebra de página.",
  },
];
