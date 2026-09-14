import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { FlowerBullet } from "@/components/ui/FlowerBullet";
import { learningCategories } from "@/data/learnings";

const ICONS: Record<string, React.ReactNode> = {
  technical: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  architecture: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="m12 3 9 5-9 5-9-5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m3 13 9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M14.5 6.5a4 4 0 0 0-5.6 5L4 16.4V20h3.6l4.9-4.9a4 4 0 0 0 5-5.6l-3 3-2.4-.6-.6-2.4 3-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  process: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v4l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  communication: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="9.5"
        cy="7.5"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17 11.5a3 3 0 1 0-2-5.24M21 19v-1a4 4 0 0 0-3-3.87"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// Bento: 2 destaques grandes em cima + 3 compactos embaixo (12 cols no desktop)
const SPANS = [
  "md:col-span-2 lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function LearningsSection() {
  const total = learningCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

  return (
    <section
      id="aprendizados"
      aria-labelledby="learnings-heading"
      className="relative overflow-hidden bg-warm/20 px-5 py-16 sm:px-10 sm:py-28"
    >
      {/* fundo decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-none -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <FloralAccent className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rotate-[-10deg] text-accent sm:h-52 sm:w-52 animate-sway" />
      <FloralAccent className="pointer-events-none absolute -left-8 top-8 hidden h-28 w-28 rotate-[24deg] text-border/70 md:block" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Aprendizados"
            title="O que desenvolvi ao longo do caminho"
            description="Cinco frentes de evolução, do código à colaboração. Os temas que mais pesaram no dia a dia aparecem em destaque."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              <FlowerBullet className="h-3 w-3 text-accent" />
              {learningCategories.length} frentes
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream">
              {total} aprendizados
            </span>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-12">
          {learningCategories.map((category, index) => {
            const featured = index === 0;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal
                as="li"
                key={category.id}
                delay={index * 70}
                className={SPANS[index] ?? "lg:col-span-4"}
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 sm:p-7 ${
                    featured
                      ? "border-ink bg-ink text-cream shadow-xl shadow-ink/20 hover:shadow-2xl hover:shadow-ink/25"
                      : "border-border/70 bg-white/70 shadow-sm shadow-accent/10 backdrop-blur hover:border-accent/60 hover:shadow-lg hover:shadow-accent/15"
                  }`}
                >
                  {/* brilho decorativo */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl transition-opacity duration-300 ${
                      featured
                        ? "bg-accent/30 group-hover:bg-accent/40"
                        : "bg-accent/15 group-hover:bg-accent/25"
                    }`}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                        featured
                          ? "bg-accent text-ink"
                          : "bg-accent/15 text-ink"
                      }`}
                    >
                      {ICONS[category.id]}
                    </span>
                    <span
                      aria-hidden
                      className={`font-display text-4xl font-semibold tabular-nums leading-none sm:text-5xl ${
                        featured
                          ? "text-cream/15 group-hover:text-cream/25"
                          : "text-ink/[0.08] group-hover:text-accent/30"
                      } transition-colors duration-300`}
                    >
                      {number}
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-display text-xl font-semibold leading-snug sm:text-[1.35rem]">
                    {category.title}
                  </h3>
                  <p
                    className={`relative mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      featured ? "text-cream/60" : "text-ink-muted"
                    }`}
                  >
                    {category.items.length}{" "}
                    {category.items.length === 1
                      ? "aprendizado"
                      : "aprendizados"}
                    {featured ? " · maior foco" : ""}
                  </p>

                  <span
                    aria-hidden
                    className={`relative my-5 h-px w-full ${
                      featured
                        ? "bg-gradient-to-r from-accent via-accent/40 to-transparent"
                        : "bg-gradient-to-r from-border via-accent/40 to-transparent"
                    }`}
                  />

                  <ul className="relative space-y-3.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                          featured ? "text-cream/85" : "text-ink-muted"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            featured
                              ? "bg-accent/20 text-accent"
                              : "bg-accent/15 text-ink"
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                            className="h-3 w-3"
                          >
                            <path
                              d="m5 12.5 4.5 4.5L19 7.5"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
