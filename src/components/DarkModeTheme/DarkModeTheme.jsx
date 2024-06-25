import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

function DarkModeTheme({ children }) {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  return useContext(ThemeContext);
};
export default DarkModeTheme;
