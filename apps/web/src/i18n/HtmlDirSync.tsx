"use client";

import { useEffect } from "react";
import { useI18n } from "./LocaleProvider";

// Keeps <html lang>/<html dir> in sync with the active client-side locale.
// layout.tsx renders lang="he"/dir="rtl" for SSR; this reconciles on the client
// once the persisted locale (e.g. a user who switched to English) is read.
export function HtmlDirSync() {
  const { locale, dir } = useI18n();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
  }, [locale, dir]);

  return null;
}
