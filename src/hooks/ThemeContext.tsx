import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(() => {
    const root = document.getElementById("mainRoot");
    return root?.classList.contains("dark") || false;
  });

  const toggleTheme = () => {
    const root = document.getElementById("mainRoot");
    root?.classList.toggle("dark");
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
