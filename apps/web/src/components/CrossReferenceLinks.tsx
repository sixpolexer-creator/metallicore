"use client";

import type { CrossReferenceEntry } from "@/types/standard";
import { useI18n } from "@/i18n";

const RELATIONSHIP_KEY: Record<
  CrossReferenceEntry["relationship"],
  string
> = {
  equivalent: "crossReference.equivalent",
  similar: "crossReference.similar",
  related: "crossReference.related",
};

/**
 * Surfaces curated cross-body relationships (the ONLY data allowed to name
 * codes from two organizations). Codes are rendered verbatim + `.ltr-data`.
 * When `highlightCodes` is provided, links touching a currently-visible result
 * are emphasized and the rest dimmed, connecting the relationships to the live
 * search without hiding the full curated set.
 */
export function CrossReferenceLinks({
  links,
  highlightCodes,
}: {
  links: readonly CrossReferenceEntry[];
  highlightCodes?: Set<string>;
}) {
  const { t } = useI18n();

  return (
    <section className="mt-10">
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        {t("crossReference.title")}
      </h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        {t("crossReference.description")}
      </p>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link, i) => {
          const touched =
            !highlightCodes ||
            highlightCodes.has(link.from.fullCode) ||
            highlightCodes.has(link.to.fullCode);
          return (
            <li
              key={`${link.from.fullCode}->${link.to.fullCode}-${i}`}
              className={[
                "mc-card rounded-2xl p-4 transition",
                touched ? "" : "opacity-40",
              ].join(" ")}
            >
              <div className="flex items-center gap-2 text-sm">
                <CodeRef body={link.from.standardBody} code={link.from.fullCode} />
                <span aria-hidden className="text-neutral-300 dark:text-neutral-600">
                  →
                </span>
                <CodeRef body={link.to.standardBody} code={link.to.fullCode} />
                <span className="ms-auto rounded-full bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-accent)]">
                  {t(RELATIONSHIP_KEY[link.relationship])}
                </span>
              </div>
              {link.note && (
                <p className="ltr-data mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {link.note}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function CodeRef({ body, code }: { body: string; code: string }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span
        data-ltr
        className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500"
      >
        {body}
      </span>
      <span className="ltr-data font-medium text-neutral-800 dark:text-neutral-100">
        {code}
      </span>
    </span>
  );
}

export default CrossReferenceLinks;
