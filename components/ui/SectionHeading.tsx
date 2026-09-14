import { FlowerBullet } from "@/components/ui/FlowerBullet";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
          <FlowerBullet className="h-3.5 w-3.5 shrink-0 text-accent" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
