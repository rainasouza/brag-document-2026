"use client";

import { uiStrings } from "@/data/site";

export function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`no-print inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-4 py-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
        <path
          d="M7 8V4h10v4M7 16H4v-7h16v7h-3M7 13h10v7H7v-7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {uiStrings.print}
    </button>
  );
}
