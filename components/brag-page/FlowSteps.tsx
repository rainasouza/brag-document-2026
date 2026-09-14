type FlowStep = {
  label: string;
  text: string;
};

const toneClasses = ["bg-soft/60", "bg-warm/50", "bg-accent/30"];

export function FlowSteps({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
      {steps.map((step, index) => (
        <div key={step.label} className="contents">
          <div
            className={`flex-1 rounded-xl border border-border/60 p-4 ${
              toneClasses[index % toneClasses.length]
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
              {step.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              {step.text}
            </p>
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className="flex shrink-0 items-center justify-center py-1 text-ink-muted lg:px-3 lg:py-0"
            >
              <span className="lg:hidden">↓</span>
              <span className="hidden lg:inline">→</span>
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
