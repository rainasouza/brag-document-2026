export function TechConstellation({ techs }: { techs: string[] }) {
  const centerX = 100;
  const centerY = 60;
  const radius = 46;

  const points = techs.map((tech, index) => {
    const angle = (Math.PI * 2 * index) / techs.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * 0.62 * Math.sin(angle);
    return { tech, x, y };
  });

  return (
    <div className="relative">
      <svg
        viewBox="0 0 200 120"
        className="h-28 w-full text-border"
        aria-hidden
      >
        {points.map((point) => (
          <line
            key={point.tech}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="currentColor"
            strokeWidth={1}
          />
        ))}
        <circle cx={centerX} cy={centerY} r={4} className="fill-accent" />
        {points.map((point) => (
          <circle
            key={point.tech}
            cx={point.x}
            cy={point.y}
            r={3}
            className="fill-warm"
          />
        ))}
      </svg>

      <ul className="sr-only">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-0 grid grid-cols-1">
        {points.map((point) => (
          <span
            key={point.tech}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border/70 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-ink-muted"
            style={{
              left: `${(point.x / 200) * 100}%`,
              top: `${(point.y / 120) * 100}%`,
            }}
          >
            {point.tech}
          </span>
        ))}
      </div>
    </div>
  );
}
