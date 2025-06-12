
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
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme?: "light" | "dark";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: undefined,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "culinary-canvas-theme",
  attribute = "class",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme); // Initialize with defaultTheme
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark" | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // Effect to set mounted and load theme from localStorage
  useEffect(() => {
    setMounted(true);
    let initialUserTheme = defaultTheme;
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      if (storedTheme && (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system")) {
        initialUserTheme = storedTheme;
      }
    } catch (e) {
      console.warn("Failed to access localStorage for theme", e);
    }
    setTheme(initialUserTheme);
  }, [storageKey, defaultTheme]);

  // Effect to apply theme to DOM and set resolvedTheme
  useEffect(() => {
    if (!mounted) {
      // On the server, or before client has mounted, determine resolvedTheme without window if possible
      if (defaultTheme === "light" || defaultTheme === "dark") {
        setResolvedTheme(defaultTheme);
      } else {
        // defaultTheme is 'system', cannot resolve on server / pre-mount
        setResolvedTheme(undefined); 
      }
      return;
    }

    const root = window.document.documentElement;
    let currentAppliedTheme: "light" | "dark";

    if (theme === "system" && enableSystem) {
      currentAppliedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      currentAppliedTheme = theme === "dark" ? "dark" : "light";
    }
    
    setResolvedTheme(currentAppliedTheme);

    root.classList.remove("light", "dark");
    if (attribute === "class") {
      root.classList.add(currentAppliedTheme);
    } else {
      root.setAttribute(attribute, currentAppliedTheme);
    }
  }, [theme, mounted, enableSystem, attribute, defaultTheme]);

  // Effect to listen to system theme changes
  useEffect(() => {
    if (!mounted || !enableSystem || theme !== 'system') return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      // If the current theme is 'system', this will trigger the main effect to re-evaluate
      setTheme('system'); 
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mounted, enableSystem, theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (mounted) {
        try {
          localStorage.setItem(storageKey, newTheme);
        } catch (e) {
          console.warn("Failed to set theme in localStorage", e);
        }
      }
      setTheme(newTheme);
    },
    resolvedTheme: mounted ? resolvedTheme : (defaultTheme === "light" || defaultTheme === "dark" ? defaultTheme : undefined),
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
