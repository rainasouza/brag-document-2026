# Brag Document 🌸

Um template de **brag document** em Next.js: uma página para registrar projetos,
desafios, aprendizados e próximos passos de um período de trabalho. Feito para
ser fácil de personalizar, agradável de ler e pronto para imprimir em PDF.

## Como usar como template

1. Use este repositório como modelo (**Use this template**) ou clone:
   ```bash
   git clone <seu-repo> && cd <seu-repo> && npm install
   ```
2. Edite os arquivos em `data/` (veja a tabela abaixo). É só texto,
   nenhum componente precisa mudar.
3. Rode localmente:
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000).
4. Publique na Vercel (veja [Deploy](#deploy)).

## Personalização

| Arquivo            | O que muda                                                        |
| ------------------ | ----------------------------------------------------------------- |
| `data/profile.ts`  | Nome, cargo, período, links e título/descrição do site (aba do navegador) |
| `data/overview.ts` | Números de destaque e áreas de atuação                            |
| `data/projects.ts` | Projetos: contexto, problema, ações, impacto, techs, link, datas e `spotlight` (frase de destaque no card) |
| `data/challenges.ts` | Desafios detalhados (problema, ação, resultado), ligados aos projetos por `deepDiveIds` |
| `data/timeline.ts` | Marcos da linha do tempo                                          |
| `data/journey.ts`  | Ordem dos projetos e quais marcos abrem/fecham a trajetória       |
| `data/learnings.ts`| Categorias de aprendizados                                        |
| `data/outside-work.ts` | Hobbies e interesses fora do trabalho                         |
| `data/next-steps.ts` | Próximos passos + frase de encerramento                         |
| `data/site.ts`     | Tema de cor padrão, alternador de temas e textos da interface     |

### Temas de cor

Quatro temas inclusos: `floral`, `ocean`, `forest` e `mono`. Troque o padrão em
`data/site.ts` (`siteConfig.theme`) ou use o botão flutuante na página. Para
criar o seu, adicione um bloco `[data-theme="nome"]` em `app/globals.css`
seguindo os existentes.

Para esconder o botão de troca de tema, defina `showThemeSwitcher: false`.

### Imprimir / salvar em PDF

O botão **"Imprimir / salvar em PDF"** no topo gera uma versão limpa para
anexar em avaliações de performance: animações e decorações somem e todos os
cards da trajetória expandem sozinhos.

## Deploy

Na [Vercel](https://vercel.com/new): importe o repositório, aceite as
configurações detectadas (Next.js) e clique em **Deploy**. Cada `push` gera um
deploy novo automaticamente.

## Estrutura

```text
app/                  # páginas, layout, estilos globais e favicon
components/
  brag-page/          # seções da página (Hero, Journey, Learnings...)
  ui/                 # primitivos reutilizáveis (Card, Badge, Reveal...)
data/                 # todo o conteúdo editável do site
public/               # arquivos estáticos
```

## Licença

MIT — veja [LICENSE](LICENSE).
