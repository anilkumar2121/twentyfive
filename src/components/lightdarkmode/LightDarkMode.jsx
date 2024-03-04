import React from "react";
import useLocalStorgae from "./useLocalStorgae";
import "./Themes.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorgae("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log("them", theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Chnage Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
