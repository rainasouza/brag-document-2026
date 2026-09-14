export type NextStep = {
  id: string;
  title: string;
  description: string;
};

export const nextSteps: NextStep[] = [
  {
    id: "deepen",
    title: "Aprofundar",
    description:
      "Quero aprofundar meu backend em Python: FastAPI, pipelines de dados e performance, para ganhar mais autonomia nas partes do Automatic Reporting que ainda me desafiam.",
  },
  {
    id: "improve",
    title: "Melhorar",
    description:
      "Quero melhorar minha comunicação: participar mais das conversas com o design, o OCA e o time, alinhando prioridades e decisões antes de codar.",
  },
  {
    id: "explore",
    title: "Explorar",
    description:
      "Quero explorar infra e cloud: entender melhor as VMs e a cloud do LSD, do deploy ao ambiente onde o que eu desenvolvo realmente roda.",
  },
];

export const closingStatement = "Raína Souza";
