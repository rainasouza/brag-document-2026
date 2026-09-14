export type Hobby = {
  id: string;
  title: string;
  description: string;
};

export const hobbies: Hobby[] = [
  {
    id: "pintura",
    title: "Pintura",
    description: "[ADICIONAR DETALHES — o que pinta, técnica, há quanto tempo]",
  },
  {
    id: "escrita",
    title: "Escrita",
    description: "[ADICIONAR DETALHES — que tipo de escrita, temas]",
  },
  {
    id: "fotografia",
    title: "Fotografia",
    description: "[ADICIONAR DETALHES — estilo, o que costuma fotografar]",
  },
  {
    id: "caca-palavras",
    title: "Caça-palavras",
    description: "[ADICIONAR DETALHES — como cria, para quem]",
  },
];
