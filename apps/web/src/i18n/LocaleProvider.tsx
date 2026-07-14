"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "./dictionaries/en.json";
import he from "./dictionaries/he.json";

export type Locale = "en" | "he";
export type Dir = "ltr" | "rtl";
export type Dictionary = Record<string, string>;

const DICTIONARIES: Record<Locale, Dictionary> = { en, he };
const STORAGE_KEY = "metallicore-locale";
const DEFAULT_LOCALE: Locale = "he";

function dirForLocale(locale: Locale): Dir {
  return locale === "he" ? "rtl" : "ltr";
}

function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "he";
}

export interface I18nContextValue {
  locale: Locale;
  dir: Dir;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Read persisted locale after mount (SSR always renders the default;
  // this one-time sync avoids a hydration mismatch, not a cascading render).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable (private mode, SSR) — keep default.
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore persistence failures.
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = DICTIONARIES[locale];
      const value = dict[key];
      return value !== undefined ? value : key;
    },
    [locale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, dir: dirForLocale(locale), t, setLocale }),
    [locale, t, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (ctx === null) {
    throw new Error("useI18n must be used within a LocaleProvider");
  }
  return ctx;
}
