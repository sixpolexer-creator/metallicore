import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

/**
 * Shared page frame (header + centered main). Each page renders this itself so
 * the chrome stays consistent without editing the root layout (owned by i18n).
 */
export function PageShell({
  children,
  width = "wide",
}: {
  children: ReactNode;
  width?: "wide" | "narrow";
}) {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main
        className={[
          "mx-auto w-full flex-1 px-6 py-10 md:py-14",
          width === "narrow" ? "max-w-4xl" : "max-w-6xl",
        ].join(" ")}
      >
        {children}
      </main>
    </div>
  );
}

export default PageShell;
