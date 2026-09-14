type FloralAccentProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function FloralAccent({ className = "", style }: FloralAccentProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      <path
        d="M60 110C60 80 60 50 60 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M60 70C60 70 40 65 34 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M60 88C60 88 82 82 88 66"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <g>
        <circle cx="60" cy="18" r="5" fill="currentColor" opacity="0.55" />
        <circle cx="46" cy="24" r="6" fill="currentColor" opacity="0.75" />
        <circle cx="74" cy="24" r="6" fill="currentColor" opacity="0.75" />
        <circle cx="52" cy="12" r="6" fill="currentColor" opacity="0.9" />
        <circle cx="68" cy="12" r="6" fill="currentColor" opacity="0.9" />
        <circle cx="60" cy="16" r="4" fill="currentColor" />
      </g>
    </svg>
  );
}
