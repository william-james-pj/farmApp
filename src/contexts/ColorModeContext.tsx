import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { DefaultTheme, ThemeProvider } from "styled-components";

import themes from "../styles/themes";

type ColorContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

type ColorContextProviderProps = {
  children: ReactNode;
};

export const ColorContext = createContext({} as ColorContextType);

export function ColorModeContext(props: ColorContextProviderProps) {
  const defaultMode = Appearance.getColorScheme() || "light";
  const [theme, setTheme] = useState(
    defaultMode === "light" ? themes.light : themes.dark
  );

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? themes.dark : themes.light);
  };

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === "light" ? themes.light : themes.dark);
    });
    return () =>
      Appearance.removeChangeListener(({ colorScheme }) => {
        setTheme(colorScheme === "light" ? themes.light : themes.dark);
      });
  }, []);

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorContext.Provider>
  );
}
