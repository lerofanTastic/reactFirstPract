import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div >
      <label className={styles.switch}>
        <input type="checkbox" />
        <span onClick={changeTheme} className={styles.slider}>
          <svg
            className={styles.sliderIcon}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="m4 16.5 8 8 16-16"></path>
          </svg>
        </span>
      </label>
    </div>
  );
};
