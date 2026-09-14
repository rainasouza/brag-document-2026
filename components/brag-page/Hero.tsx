import { profile } from "@/data/profile";
import { FloralAccent } from "@/components/ui/FloralAccent";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-soft/70 via-cream to-cream px-6 py-24 sm:px-10 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-warm/40 blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <FloralAccent
        className="pointer-events-none absolute -right-4 -top-4 h-48 w-48 text-accent sm:h-64 sm:w-64 animate-sway"
        style={
          { "--sway-from": "-2deg", "--sway-to": "2deg" } as React.CSSProperties
        }
      />
      <FloralAccent
        className="pointer-events-none absolute -left-8 top-1/3 hidden h-24 w-24 rotate-[135deg] text-warm/80 sm:block animate-sway"
        style={
          {
            animationDelay: "1.5s",
            "--sway-from": "-4deg",
            "--sway-to": "4deg",
          } as React.CSSProperties
        }
      />
      <FloralAccent className="pointer-events-none absolute bottom-10 right-8 hidden h-16 w-16 rotate-[30deg] text-accent/60 sm:block animate-sway" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-ink-muted">
          {profile.name} · {profile.role}
        </p>
        <h1
          id="hero-heading"
          className="font-display text-4xl font-semibold leading-tight sm:text-6xl"
        >
          {profile.heroTitle}
        </h1>
        <p className="max-w-xl text-lg text-ink-muted sm:text-xl">
          {profile.heroSubtitle}
        </p>
        <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-4 py-2 text-sm text-ink-muted">
          {profile.org} · {profile.period}
        </p>

        <a
          href="#journey"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {profile.journeyHint}
          <span aria-hidden className="animate-bounce">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
