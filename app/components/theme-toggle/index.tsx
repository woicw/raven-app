"use client";

import { useTheme } from "./hooks/use-theme";

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      <span aria-hidden="true" className="theme-toggle__current theme-toggle__current--light">
        <span className="theme-toggle__icon">☀</span>
        <span>Light theme</span>
      </span>
      <span aria-hidden="true" className="theme-toggle__current theme-toggle__current--dark">
        <span className="theme-toggle__icon">☾</span>
        <span>Dark theme</span>
      </span>
    </button>
  );
};
