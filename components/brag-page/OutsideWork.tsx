import { Reveal } from "@/components/ui/Reveal";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { FlowerBullet } from "@/components/ui/FlowerBullet";
import { hobbies } from "@/data/outside-work";

const DOODLES: Record<string, React.ReactNode> = {
  pintura: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <path
        d="M4 20c2.5 0 2.5-2 4.5-2h9a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v9c0 1.1-.9 2-2 2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="1.3" fill="currentColor" />
      <circle cx="13.5" cy="10" r="1.3" fill="currentColor" opacity="0.6" />
      <circle cx="11.5" cy="13.5" r="1.3" fill="currentColor" opacity="0.8" />
    </svg>
  ),
  fotografia: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8.5 7 10 4.5h4L15.5 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
    </svg>
  ),
  "caca-palavras": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.6"
      />
      <path
        d="m7 17 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  leitura: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <path
        d="M12 6.5C10 4.8 7.2 4.5 4 5v13c3.2-.5 6-.2 8 1.5 2-1.7 4.8-2 8-1.5V5c-3.2-.5-6-.2-8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5v13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// Fita adesiva + inclinação alternadas p/ efeito scrapbook
const ROTATIONS = [
  "-rotate-1 sm:-rotate-2",
  "rotate-1 sm:rotate-2",
  "-rotate-1 sm:-rotate-[1.5deg]",
  "rotate-1 sm:rotate-[1.5deg]",
];

const OFFSETS = ["", "lg:translate-y-10", "", "lg:translate-y-10"];

const TAPES = ["bg-warm/80", "bg-accent/60", "bg-soft", "bg-warm/60"];

const TAPE_ROTATIONS = [
  "-rotate-6",
  "rotate-3",
  "-rotate-3",
  "rotate-6",
];

export function OutsideWork() {
  return (
    <section
      id="fora-do-trabalho"
      aria-labelledby="outside-work-heading"
      className="relative overflow-hidden px-5 py-16 sm:px-10 sm:py-28"
    >
      {/* papel pontilhado */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(#d9a8a8 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />
      <FloralAccent className="pointer-events-none absolute -right-8 -bottom-8 h-44 w-44 rotate-[15deg] text-accent sm:h-56 sm:w-56 animate-sway" />
      <FloralAccent className="pointer-events-none absolute -left-6 top-10 hidden h-24 w-24 rotate-[-20deg] text-warm sm:block animate-sway" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            <FlowerBullet className="h-4 w-4 text-accent" />
            Fora do trabalho
          </p>
          <h2
            id="outside-work-heading"
            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
          >
            O que também me move
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Quando fecho o notebook. São hábitos simples que me ajudam a
            descansar de verdade e a voltar com a cabeça mais leve.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7 lg:pb-10">
          {hobbies.map((hobby, index) => (
            <Reveal
              as="li"
              key={hobby.id}
              delay={index * 90}
              className={OFFSETS[index]}
            >
              <article
                className={`group relative flex h-full flex-col rounded-[4px] border border-border/50 bg-white/85 p-6 pt-8 shadow-md shadow-ink/5 backdrop-blur transition-all duration-300 ease-out hover:z-10 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/20 ${ROTATIONS[index]}`}
              >
                {/* fita adesiva */}
                <span
                  aria-hidden
                  className={`absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-[2px] opacity-90 shadow-sm ${TAPES[index]} ${TAPE_ROTATIONS[index]}`}
                />

                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-soft/70 text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                  {DOODLES[hobby.id]}
                </span>

                <h3 className="mt-4 font-display text-xl font-semibold italic">
                  {hobby.title}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {hobby.tag}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {hobby.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-12 flex items-center justify-center gap-2 text-center font-display text-base italic text-ink-muted sm:text-lg">
            <FlowerBullet className="h-3.5 w-3.5 shrink-0 text-accent" />
            nada de entregas aqui, só coisas que me fazem bem
          </p>
        </Reveal>
      </div>
    </section>
  );
}
