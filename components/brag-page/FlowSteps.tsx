type FlowStep = {
  label: string;
  text: string;
};

const toneClasses = ["bg-soft/60", "bg-warm/50", "bg-accent/30"];

export function FlowSteps({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, index) => (
        <div key={step.label}>
          <div
            className={`rounded-xl border border-border/60 p-4 sm:p-5 ${
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
              className="flex items-center justify-center py-1 text-ink-muted"
            >
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
