import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { stats, areas } from "@/data/overview";

export function Overview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28"
    >
      <FloralAccent className="pointer-events-none absolute -right-10 top-6 h-36 w-36 rotate-[20deg] text-warm sm:h-44 sm:w-44 animate-sway" />
      <FloralAccent className="pointer-events-none absolute -left-8 bottom-8 hidden h-28 w-28 rotate-[30deg] text-accent/50 sm:block animate-sway" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Visão geral"
            title="O período em números"
            description="Antes dos detalhes, um retrato rápido: a trajetória completa está logo abaixo."
          />
        </Reveal>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={100 + index * 80}>
              <div className="rounded-2xl border border-border/70 bg-soft/50 p-6 text-center">
                <dd className="font-display text-4xl font-semibold sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm text-ink-muted">{stat.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-14">
          <Reveal delay={150}>
            <h3 className="font-display text-xl font-semibold">
              Principais áreas de atuação
            </h3>
          </Reveal>
          <ul className="mt-4 flex flex-wrap gap-3">
            {areas.map((area, index) => (
              <Reveal
                key={area}
                as="li"
                delay={200 + index * 60}
                className="flex items-center gap-2 rounded-full border border-border/70 bg-white/50 px-4 py-2 text-sm text-ink-muted"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {area}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
