import { Badge } from "@/components/ui/Badge";
import { FlowSteps } from "@/components/brag-page/FlowSteps";
import { TechConstellation } from "@/components/brag-page/TechConstellation";

export type DeepDive = {
  title: string;
  problem: string;
  action: string;
  result: string;
};

export type JourneyItemData = {
  id: string;
  date: string;
  eyebrow: string;
  title: string;
  summary: string;
  flow: { label: string; text: string }[];
  techs?: string[];
  link?: string;
  deepDives?: DeepDive[];
};

type JourneyCardBodyProps = JourneyItemData & {
  expanded: boolean;
  onToggleExpand?: () => void;
};

export function JourneyCardBody({
  eyebrow,
  title,
  summary,
  flow,
  techs,
  link,
  deepDives,
  expanded,
  onToggleExpand,
}: JourneyCardBodyProps) {
  const hasDetails = flow.length > 0 || (deepDives && deepDives.length > 0);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        {eyebrow}
      </p>

      <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
        {summary}
      </p>

      {techs && techs.length > 0 ? (
        <div className="mt-6 max-w-md">
          <TechConstellation techs={techs} />
        </div>
      ) : null}

      {onToggleExpand && hasDetails ? (
        <button
          type="button"
          onClick={onToggleExpand}
          aria-expanded={expanded}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-soft/40 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-soft/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {expanded ? "Ver menos" : "Ver problema, ação e resultado"}
          <span aria-hidden className={expanded ? "rotate-180" : ""}>
            ↓
          </span>
        </button>
      ) : null}

      {expanded && hasDetails ? (
        <div className="mt-6 space-y-6 border-t border-border/60 pt-6">
          {flow.length > 0 ? <FlowSteps steps={flow} /> : null}

          {deepDives?.map((dive) => (
            <div key={dive.title}>
              <p className="text-sm font-semibold">{dive.title}</p>
              <div className="mt-3">
                <FlowSteps
                  steps={[
                    { label: "Problema", text: dive.problem },
                    { label: "Ação", text: dive.action },
                    { label: "Resultado", text: dive.result },
                  ]}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {link ? (
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge tone="soft">
            {link.startsWith("[") ? (
              link
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-accent decoration-2 underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Ver no GitHub
              </a>
            )}
          </Badge>
        </div>
      ) : null}
    </div>
  );
}
