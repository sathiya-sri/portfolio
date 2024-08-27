import React, { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./ThemeButton.css";
import { ContextApi } from "../ContextApi/ContextApi.js";
const ThemeButton = () => {
  const { darkMode, setDarkMode } = useContext(ContextApi);
  const handleClick = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <section>
      <span className={darkMode ? 'dark_bg': 'light_bg'}>
        {darkMode ? (
          <MdDarkMode className="mode-icon" onClick={handleClick} />
        ) : (
          <MdLightMode className="mode-icon" onClick={handleClick} />
        )}
      </span>
    </section>
  );
};

export default ThemeButton;
