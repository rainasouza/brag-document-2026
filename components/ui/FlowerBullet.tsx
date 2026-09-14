export function FlowerBullet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="7" r="3.4" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="17" r="3.4" fill="currentColor" opacity="0.85" />
      <circle cx="7" cy="12" r="3.4" fill="currentColor" opacity="0.85" />
      <circle cx="17" cy="12" r="3.4" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
    </svg>
  );
}
