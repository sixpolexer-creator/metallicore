"use client";

import { useEffect } from "react";
import { useI18n } from "./LocaleProvider";

// Keeps <html lang>/<html dir> in sync with the active client-side locale.
// layout.tsx renders lang="en"/dir="ltr" for SSR; this reconciles on the client.
export function HtmlDirSync() {
  const { locale, dir } = useI18n();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
  }, [locale, dir]);

  return null;
}
