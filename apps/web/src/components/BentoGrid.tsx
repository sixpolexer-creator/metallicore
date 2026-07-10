import type { ReactNode } from "react";

/**
 * Bento layout primitive: a dense, auto-flowing CSS grid whose children opt
 * into varied cell spans via BentoCard's `span` prop. Direction-agnostic
 * (uses logical grid flow) so it behaves under both LTR and RTL chrome.
 */
export function BentoGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "grid grid-cols-2 gap-4 md:grid-cols-4 [grid-auto-flow:dense]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default BentoGrid;
