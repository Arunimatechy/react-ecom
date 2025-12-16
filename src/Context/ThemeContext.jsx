import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Themes, setThemes] = useState(
    JSON.parse(localStorage.getItem("Themes")) || false
  );

  useEffect(() => {
    localStorage.setItem("Themes", JSON.stringify(Themes));
  }, [Themes]);

  const toggleTheme = () => setThemes(!Themes);

  return (
    <ThemeContext.Provider value={{ Themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
