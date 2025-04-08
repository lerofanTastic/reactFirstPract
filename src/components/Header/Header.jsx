import React, { useContext } from "react";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import { Menu } from "../Menu/Menu";
import { CustomComponent } from "../CustomComponent/CustomComponent";
import { TranslationContext } from "../../context/translation/translationContext";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Login } from "../Login/Login";
import { Link } from "react-router-dom";

export const Header = ({changeLang}) => {
  const translation = useContext(TranslationContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>

        <div className={styles.headerLeft}>
          <Logo />
          {/* <h1 className={styles.title}>{translation.siteName}</h1> */}
        </div>

        <div className={styles.headerCenter}>
          <Menu />
        </div>

        <div className={styles.headerRight}>
          <div className={styles.headerFunc}>
            <button onClick={changeLang}>{translation.menu.button}</button>
            <ThemeSwitcher />
          </div>
          <div className={styles.headerFunc}>
            
            <Link to="/login"><img className={styles.imgWrapper} src="/lero.jpg" alt="User Icon" /></Link>
          </div>
          
        </div>   

      </div>
      
      
      {/* <CustomComponent /> */}
    </header>
  );
};
