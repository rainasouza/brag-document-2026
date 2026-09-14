import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { JourneyNode } from "@/components/brag-page/JourneyNode";
import { JourneyMap } from "@/components/brag-page/JourneyMap";
import type { JourneyItemData } from "@/components/brag-page/JourneyCardBody";
import { projects } from "@/data/projects";
import { challenges } from "@/data/challenges";
import { timeline } from "@/data/timeline";

const PROJECT_ORDER = [
  "jinja-to-react-ssr",
  "sap-frontend",
  "multi-tema",
  "performance-pipeline",
  "design-cms",
];

const PROJECT_DATES: Record<string, string> = {
  "jinja-to-react-ssr": "Maio de 2026",
  "multi-tema": "Julho de 2026",
  "performance-pipeline": "Agosto de 2026",
  "design-cms": "Julho – Setembro de 2026",
  "sap-frontend": "[ADICIONAR PERÍODO]",
};

const PROJECT_SHORT_NAMES: Record<string, string> = {
  "jinja-to-react-ssr": "Jinja → React SSR",
  "multi-tema": "Relatórios Multi-tema",
  "sap-frontend": "SAP Frontend",
  "performance-pipeline": "Performance & Pipeline",
  "design-cms": "Design System & CMS",
};

const PROJECT_DEEP_DIVES: Record<string, string[]> = {
  "performance-pipeline": ["weasyprint-performance", "field-mismatch"],
  "design-cms": ["page-break"],
};

const orderedProjects = PROJECT_ORDER.map((id) =>
  projects.find((project) => project.id === id),
).filter((project): project is (typeof projects)[number] => Boolean(project));

const inicio = timeline.find((step) => step.id === "inicio");
const desenvolvimento = timeline.find((step) => step.id === "desenvolvimento");
const atualmente = timeline.find((step) => step.id === "atualmente");

function buildNodes(): JourneyItemData[] {
  const nodes: JourneyItemData[] = [];

  if (inicio) {
    nodes.push({
      id: "inicio",
      date: inicio.date,
      eyebrow: "Início",
      title: inicio.label,
      summary: inicio.description,
      flow: [],
    });
  }

  if (desenvolvimento) {
    nodes.push({
      id: "desenvolvimento",
      date: desenvolvimento.date,
      eyebrow: "Desenvolvimento",
      title: desenvolvimento.label,
      summary: desenvolvimento.description,
      flow: [],
    });
  }

  orderedProjects.forEach((project) => {
    const deepDiveIds = PROJECT_DEEP_DIVES[project.id] ?? [];
    const deepDives = deepDiveIds
      .map((id) => challenges.find((challenge) => challenge.id === id))
      .filter((c): c is (typeof challenges)[number] => Boolean(c))
      .map((c) => ({
        title: c.title,
        problem: c.problem,
        action: c.action,
        result: c.result,
      }));

    nodes.push({
      id: project.id,
      date: PROJECT_DATES[project.id],
      eyebrow: PROJECT_SHORT_NAMES[project.id] ?? project.name,
      title: project.name,
      summary: project.context,
      flow: [
        { label: "Problema", text: project.problem },
        { label: "Ação", text: project.whatIDid.join(" · ") },
        { label: "Resultado", text: project.impact },
      ],
      techs: project.techs,
      link: project.link,
      deepDives,
    });
  });

  if (atualmente) {
    nodes.push({
      id: "atualmente",
      date: atualmente.date,
      eyebrow: "Atualmente",
      title: atualmente.label,
      summary: atualmente.description,
      flow: [],
    });
  }

  return nodes;
}

const nodes = buildNodes();

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-soft/30 px-6 py-20 sm:px-10 sm:py-28"
    >
      <FloralAccent className="pointer-events-none absolute -left-6 top-10 h-32 w-32 rotate-[-25deg] text-warm sm:h-40 sm:w-40 animate-sway" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Trajetória"
            title="Uma jornada, não uma lista"
            description="Cada ponto é um momento real: um projeto entregue, um problema enfrentado, uma decisão tomada. Clique em qualquer ponto para ver o caminho completo — problema, ação e resultado."
          />
        </Reveal>

        <div className="mt-14 lg:hidden">
          <ol>
            {nodes.map((node, index) => (
              <JourneyNode key={node.id} index={index} {...node} />
            ))}
          </ol>
        </div>

        <Reveal delay={100} className="mt-14 hidden lg:block">
          <JourneyMap nodes={nodes} />
        </Reveal>
      </div>
    </section>
  );
}
