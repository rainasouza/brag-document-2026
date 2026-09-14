import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { JourneyMap } from "@/components/brag-page/JourneyMap";
import type { JourneyItemData } from "@/components/brag-page/JourneyCardBody";
import { projects } from "@/data/projects";
import { challenges } from "@/data/challenges";
import { timeline } from "@/data/timeline";
import { journeyConfig } from "@/data/journey";

const orderedProjects = journeyConfig.projectOrder
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

function milestoneNode(id: string): JourneyItemData | null {
  const step = timeline.find((entry) => entry.id === id);
  if (!step) return null;
  return {
    id: step.id,
    date: step.date,
    eyebrow: step.label,
    title: step.label,
    summary: step.description,
    flow: [],
  };
}

function buildNodes(): JourneyItemData[] {
  const nodes: JourneyItemData[] = [];

  for (const id of journeyConfig.openingMilestoneIds) {
    const node = milestoneNode(id);
    if (node) nodes.push(node);
  }

  orderedProjects.forEach((project) => {
    const deepDives = (project.deepDiveIds ?? [])
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
      date: project.dateLabel,
      eyebrow: project.shortName,
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
      highlight: project.spotlight,
    });
  });

  for (const id of journeyConfig.closingMilestoneIds) {
    const node = milestoneNode(id);
    if (node) nodes.push(node);
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
      <FloralAccent className="pointer-events-none absolute -right-8 top-1/2 hidden h-28 w-28 rotate-[20deg] text-accent/50 md:block animate-sway" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Trajetória"
            title="Durante o período"
            description="Siga a linha do tempo de cima para baixo e expanda cada ponto para ver problema, ação e resultado."
          />
        </Reveal>

        <div className="mt-14">
          <JourneyMap nodes={nodes} />
        </div>
      </div>
    </section>
  );
}
