type BadgeProps = {
  children: React.ReactNode;
  tone?: "accent" | "warm" | "soft";
};

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  accent: "bg-accent/70 text-ink",
  warm: "bg-warm/70 text-ink",
  soft: "bg-soft text-ink",
};

export function Badge({ children, tone = "soft" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
