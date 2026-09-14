const WIDTH = 300;
const STEP = 34;
const FONT_SIZE = 11;

export function TechConstellation({ techs }: { techs: string[] }) {
  // Divide os itens entre coluna esquerda e direita, com espaçamento
  // vertical uniforme: assim as labels nunca se sobrepõem.
  const sides: { tech: string; right: boolean }[] = techs.map(
    (tech, index) => ({ tech, right: index % 2 === 0 }),
  );
  const perSide = (right: boolean) => sides.filter((s) => s.right === right);
  const maxSide = Math.max(perSide(true).length, perSide(false).length, 1);
  const height = Math.max(150, maxSide * STEP + 40);
  const centerX = WIDTH / 2;
  const centerY = height / 2;

  const counters = { left: 0, right: 0 };
  const points = sides.map((side) => {
    const column = perSide(side.right);
    const i = counters[side.right ? "right" : "left"];
    counters[side.right ? "right" : "left"] += 1;
    const top = (height - (column.length - 1) * STEP) / 2;
    const y = column.length === 1 ? centerY : top + i * STEP;
    const dotX = side.right ? centerX + 22 : centerX - 22;
    return {
      tech: side.tech,
      dotX,
      y,
      labelX: side.right ? dotX + 10 : dotX - 10,
      textAnchor: side.right ? "start" : "end",
    } as const;
  });

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      className="mx-auto h-auto w-full max-w-[300px] text-border"
      role="img"
      aria-label={`Tecnologias: ${techs.join(", ")}`}
    >
      {points.map((point) => (
        <line
          key={point.tech}
          x1={centerX}
          y1={centerY}
          x2={point.dotX}
          y2={point.y}
          stroke="currentColor"
          strokeWidth={1}
        />
      ))}
      <circle cx={centerX} cy={centerY} r={9} className="fill-accent/25" />
      <circle
        cx={centerX}
        cy={centerY}
        r={4}
        className="fill-accent"
        stroke="#ffecec"
        strokeWidth={1.5}
      />
      {points.map((point) => (
        <g key={point.tech}>
          <circle
            cx={point.dotX}
            cy={point.y}
            r={4}
            className="fill-warm"
            stroke="#ffecec"
            strokeWidth={1.5}
          />
          <text
            x={point.labelX}
            y={point.y}
            textAnchor={point.textAnchor}
            dominantBaseline="middle"
            fontSize={FONT_SIZE}
            className="fill-ink-muted font-medium"
          >
            {point.tech}
          </text>
        </g>
      ))}
    </svg>
  );
}
