"use client";

import { useState } from "react";
import {
  JourneyCardBody,
  type JourneyItemData,
} from "@/components/brag-page/JourneyCardBody";

export function JourneyMap({ nodes }: { nodes: JourneyItemData[] }) {
  const [activeId, setActiveId] = useState<string | null>(
    nodes[0]?.id ?? null,
  );
  const active = nodes.find((node) => node.id === activeId);

  return (
    <div>
      <div className="flex items-stretch justify-between gap-1">
        {nodes.map((node) => {
          const isActive = node.id === activeId;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveId(node.id)}
              aria-expanded={isActive}
              aria-label={`Ver detalhes de ${node.eyebrow}`}
              className="group flex flex-1 flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span
                className={`flex h-10 items-end justify-center px-1 text-center text-xs font-medium leading-snug transition-colors ${
                  isActive ? "text-ink" : "text-ink-muted group-hover:text-ink"
                }`}
              >
                {node.eyebrow}
              </span>
              <span
                aria-hidden
                className={`mt-2 h-4 w-4 shrink-0 rounded-full border-2 bg-cream transition-transform duration-300 ${
                  isActive
                    ? "scale-125 border-accent bg-accent"
                    : "border-border group-hover:scale-110 group-hover:border-accent/70"
                }`}
              />
              <span aria-hidden className="h-4 w-px bg-border/70" />
            </button>
          );
        })}
      </div>

      <div aria-hidden className="h-px bg-border" />

      {active ? (
        <div
          key={active.id}
          className="animate-panel-in mt-6 rounded-2xl border border-border/70 bg-white/60 p-8 shadow-sm shadow-accent/10"
        >
          <JourneyCardBody {...active} expanded />
        </div>
      ) : null}
    </div>
  );
}
