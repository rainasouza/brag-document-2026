import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { FlowerBullet } from "@/components/ui/FlowerBullet";
import { hobbies } from "@/data/outside-work";

export function OutsideWork() {
  return (
    <section
      id="fora-do-trabalho"
      aria-labelledby="outside-work-heading"
      className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28"
    >
      <FloralAccent className="pointer-events-none absolute -right-8 -bottom-8 h-44 w-44 rotate-[15deg] text-accent sm:h-56 sm:w-56 animate-sway" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <FlowerBullet className="h-4 w-4 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Fora do trabalho
            </p>
          </div>
          <h2
            id="outside-work-heading"
            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
          >
            O que também me move
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            Neste período também comecei a pintar, escrever, tirar fotos e
            fazer caça-palavras — hábitos que ajudam a equilibrar o lado
            técnico do dia a dia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <Reveal key={hobby.id} delay={index * 80}>
              <Card tone={index % 2 === 0 ? "soft" : "warm"} className="h-full">
                <h3 className="font-display text-lg font-semibold">
                  {hobby.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {hobby.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
