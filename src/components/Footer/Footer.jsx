import React from "react";
import styles from "./Footer.module.css";
import { Socials } from "../Socials/Socials";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <Socials />
      </div>
      <div className={styles.footerBottom}>
        <p>2025 by Egor Suhoruchkin</p>
      </div>
    </div>
  );
};
