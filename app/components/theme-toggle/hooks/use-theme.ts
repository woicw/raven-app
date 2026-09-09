"use client";

export type Theme = "light" | "dark";

const storageKey = "raven-theme";

const isTheme = (value: string | undefined): value is Theme =>
  value === "light" || value === "dark";

const getTheme = (): Theme => {
  const documentTheme = document.documentElement.dataset.theme;

  if (isTheme(documentTheme)) {
    return documentTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const toggleTheme = () => {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return { toggleTheme };
};
