"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  // Element type varies with `as`; IntersectionObserver only needs an Element.
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = `reveal ${visible ? "reveal-visible" : ""} ${className}`;
  const style = { transitionDelay: `${delay}ms` };

  if (as === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={classes} style={style}>
      {children}
    </div>
  );
}
