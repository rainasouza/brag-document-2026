export type Hobby = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export const hobbies: Hobby[] = [
  {
    id: "pintura",
    title: "Pintura",
    tag: "telas pequenas",
    description:
      "Pinto paisagens em telas pequenas, na maioria flores. Começou despretensioso e virou meu jeito favorito de desligar a cabeça.",
  },
  {
    id: "fotografia",
    title: "Fotografia",
    tag: "flores & família",
    description:
      "Fotografo flores e a minha família. Registros simples, sem pretensão, só para guardar o que é bonito no dia a dia.",
  },
  {
    id: "caca-palavras",
    title: "Caça-palavras",
    tag: "ritual de descanso",
    description:
      "Recorro aos caça-palavras quando preciso relaxar de verdade. Papel, caneta e uns minutinhos sem tela resolvem muito.",
  },
  {
    id: "leitura",
    title: "Leitura",
    tag: "sem pressa",
    description:
      "Leio sem meta, muitas vezes ao lado dos caça-palavras. Faz parte do mesmo ritual de desacelerar no fim do dia.",
  },
];
