type CardProps = {
  children: React.ReactNode;
  tone?: "base" | "soft" | "warm";
  className?: string;
};

const toneStyles: Record<NonNullable<CardProps["tone"]>, string> = {
  base: "bg-white/60",
  soft: "bg-soft/60",
  warm: "bg-warm/40",
};

export function Card({ children, tone = "base", className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border/70 p-6 shadow-sm shadow-accent/10 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8 ${toneStyles[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
