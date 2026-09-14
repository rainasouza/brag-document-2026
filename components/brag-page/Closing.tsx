import { Reveal } from "@/components/ui/Reveal";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { closingStatement } from "@/data/next-steps";

export function Closing() {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="border-t border-border/60 px-6 py-24 text-center sm:px-10 sm:py-32"
    >
      <div className="relative mx-auto max-w-2xl">
        <FloralAccent className="pointer-events-none absolute -left-2 top-1/2 hidden h-16 w-16 -translate-y-1/2 rotate-[-20deg] text-warm/70 sm:block" />
        <FloralAccent className="pointer-events-none absolute -right-2 top-1/2 hidden h-16 w-16 -translate-y-1/2 rotate-[20deg] text-warm/70 sm:block" />
        <Reveal className="flex flex-col items-center">
          <FloralAccent className="h-12 w-12 text-accent animate-sway" />
          <p
            id="closing-heading"
            className="mt-6 font-display text-2xl italic leading-relaxed text-ink sm:text-3xl"
          >
            {closingStatement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
