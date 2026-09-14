"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  JourneyCardBody,
  type JourneyItemData,
} from "@/components/brag-page/JourneyCardBody";

export type JourneyNodeProps = JourneyItemData & {
  index: number;
};

export function JourneyNode({ index, ...item }: JourneyNodeProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li id={item.id} className="relative pb-14 pl-10 last:pb-0 sm:pl-14">
      <span
        aria-hidden
        className="absolute left-0 top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-cream sm:h-5 sm:w-5"
      />
      <span
        aria-hidden
        className="absolute left-0 top-6 h-8 w-px -translate-x-1/2 bg-border/70 sm:top-8"
      />

      <Reveal delay={Math.min(index * 60, 300)}>
        <div className="rounded-2xl border border-border/70 bg-white/50 p-6 shadow-sm shadow-accent/10 sm:p-8">
          <JourneyCardBody
            {...item}
            expanded={expanded}
            onToggleExpand={() => setExpanded((value) => !value)}
          />
        </div>
      </Reveal>
    </li>
  );
}
