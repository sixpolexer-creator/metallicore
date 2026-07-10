import type { ReactNode } from "react";
import Link from "next/link";

type BentoSpan = "sm" | "md" | "lg" | "wide" | "tall";

const SPAN_CLASSES: Record<BentoSpan, string> = {
  sm: "col-span-1 row-span-1",
  md: "col-span-2 row-span-1",
  lg: "col-span-2 row-span-2",
  wide: "col-span-2 md:col-span-4 row-span-1",
  tall: "col-span-1 row-span-2",
};

/**
 * A single Bento cell. Renders as a Link when `href` is set (interactive lift
 * hover), otherwise a static panel. Sizing is driven by `span` so a grid can
 * mix large hero cells with small ones for the Bento rhythm.
 */
export function BentoCard({
  children,
  span = "sm",
  href,
  className = "",
}: {
  children: ReactNode;
  span?: BentoSpan;
  href?: string;
  className?: string;
}) {
  const shell = [
    "mc-card group relative flex flex-col overflow-hidden rounded-2xl p-5",
    SPAN_CLASSES[span],
    href ? "mc-card-interactive cursor-pointer" : "",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={shell}>
        {children}
      </Link>
    );
  }

  return <div className={shell}>{children}</div>;
}

export default BentoCard;
