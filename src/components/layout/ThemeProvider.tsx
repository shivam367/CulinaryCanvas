"use client";
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean; // Added to match RootLayout props, though not fully implemented here
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme?: "light" | "dark";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "culinary-canvas-theme",
  attribute = "class", // Typically "class" for adding .dark or .light to html tag
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">();

  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = theme === "system" && enableSystem
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme === "dark" ? "dark" : "light";
    
    setResolvedTheme(currentTheme);

    root.classList.remove("light", "dark");
    if (attribute === "class") {
      root.classList.add(currentTheme);
    } else {
      root.setAttribute(attribute, currentTheme);
    }
  }, [theme, enableSystem, attribute]);


  useEffect(() => {
    if (!enableSystem || theme !== 'system' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
       // Force re-evaluation of useEffect above
      setTheme(prev => prev === 'system' ? 'system' : prev);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [enableSystem, theme]);


  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, newTheme);
      }
      setTheme(newTheme);
    },
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
