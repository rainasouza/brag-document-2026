"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  JourneyCardBody,
  type JourneyItemData,
} from "@/components/brag-page/JourneyCardBody";
import { uiStrings } from "@/data/site";

export type JourneyNodeProps = {
  item: JourneyItemData;
  index: number;
  total: number;
};

export function JourneyNode({ item, index, total }: JourneyNodeProps) {
  const [expanded, setExpanded] = useState(false);
  const wasExpanded = useRef(false);

  // Na impressão, expande tudo para o PDF sair completo; depois restaura.
  useEffect(() => {
    const handleBeforePrint = () => {
      setExpanded((current) => {
        wasExpanded.current = current;
        return true;
      });
    };
    const handleAfterPrint = () => setExpanded(wasExpanded.current);
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  const isFirst = index === 0;
  const isLast = index === total - 1;
  const isMilestone = item.flow.length === 0 && !item.techs?.length;
  const number = String(index + 1).padStart(2, "0");

  const segmentPosition =
    isFirst && isLast
      ? "hidden"
      : isFirst
        ? "top-[40px] bottom-0"
        : isLast
          ? "top-0 h-[40px]"
          : "top-0 bottom-0";

  return (
    <li className="relative pb-10 pl-14 last:pb-0 sm:pl-16">
      {/* tronco: segmento da linha do tempo deste ponto */}
      <span
        aria-hidden
        className={`absolute left-[22px] w-[3px] -translate-x-1/2 rounded-full bg-border/70 sm:left-[26px] ${segmentPosition}`}
      />

      {/* nó numerado no tronco */}
      <span className="absolute left-[22px] top-5 -translate-x-1/2 sm:left-[26px]">
        <span
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-display text-xs font-semibold shadow-sm ${
            isMilestone
              ? "border-ink bg-ink text-cream"
              : "border-accent bg-cream text-ink"
          }`}
        >
          {isLast ? (
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-accent/50 motion-safe:animate-ping"
            />
          ) : null}
          <span className="relative">{number}</span>
        </span>
      </span>

      {/* data acima do card */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <p className="inline-flex items-center rounded-full border border-border/70 bg-white/70 px-3.5 py-1 text-xs font-medium text-ink-muted sm:text-sm">
          {item.date}
        </p>
        {isLast ? (
          <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream sm:text-[11px]">
            {uiStrings.now}
          </span>
        ) : null}
      </div>

      <Reveal delay={Math.min(index * 60, 300)}>
        <div className="relative rounded-3xl border border-border/70 bg-white/70 p-5 shadow-sm shadow-accent/10 backdrop-blur transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/15 sm:p-7">
          {/* ramo que liga o tronco ao card */}
          <span
            aria-hidden
            className="absolute right-full top-[39px] h-[2px] w-[14px] bg-accent/70 sm:w-[18px]"
          />
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
