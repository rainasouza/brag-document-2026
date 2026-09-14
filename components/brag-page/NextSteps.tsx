import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { FlowerBullet } from "@/components/ui/FlowerBullet";
import { nextSteps } from "@/data/next-steps";

export function NextSteps() {
  return (
    <section
      id="proximos-passos"
      aria-labelledby="next-steps-heading"
      className="relative overflow-hidden bg-soft/30 px-6 py-20 sm:px-10 sm:py-28"
    >
      <FloralAccent className="pointer-events-none absolute -left-10 -top-6 h-36 w-36 rotate-[-30deg] text-warm sm:h-48 sm:w-48 animate-sway" />
      <FloralAccent className="pointer-events-none absolute -bottom-4 -right-8 h-32 w-32 rotate-[20deg] text-accent/60 sm:h-40 sm:w-40 animate-sway" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <FlowerBullet className="h-4 w-4 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Próximos passos
            </p>
          </div>
          <h2
            id="next-steps-heading"
            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
          >
            Para onde vou
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {nextSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 100}>
              <Card tone="warm" className="h-full">
                <div className="flex items-center gap-2">
                  <FlowerBullet className="h-4 w-4 shrink-0 text-accent" />
                  <h3 className="font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
