import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { FlowerBullet } from "@/components/ui/FlowerBullet";
import { learningCategories } from "@/data/learnings";

export function LearningsSection() {
  return (
    <section
      id="aprendizados"
      aria-labelledby="learnings-heading"
      className="relative overflow-hidden bg-warm/20 px-6 py-20 sm:px-10 sm:py-28"
    >
      <FloralAccent className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rotate-[-10deg] text-accent sm:h-52 sm:w-52 animate-sway" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <FlowerBullet className="h-4 w-4 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Aprendizados
            </p>
          </div>
          <h2
            id="learnings-heading"
            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
          >
            O que desenvolvi ao longo do caminho
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {learningCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <Card tone="base">
                <h3 className="font-display text-lg font-semibold">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
