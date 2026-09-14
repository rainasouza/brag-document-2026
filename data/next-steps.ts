export type NextStep = {
  id: string;
  title: string;
  description: string;
};

export const nextSteps: NextStep[] = [
  {
    id: "deepen",
    title: "Aprofundar",
    description: "[ADICIONAR O QUE VOCÊ QUER APROFUNDAR]",
  },
  {
    id: "improve",
    title: "Melhorar",
    description: "[ADICIONAR O QUE VOCÊ QUER MELHORAR]",
  },
  {
    id: "explore",
    title: "Explorar",
    description: "[ADICIONAR QUAIS PROJETOS OU ÁREAS VOCÊ QUER EXPLORAR]",
  },
];

export const closingStatement = "[ADICIONAR FRASE DE ENCERRAMENTO]";
