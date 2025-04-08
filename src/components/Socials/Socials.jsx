import React from "react";
import styles from "./Socials.module.css";
import { Logo } from "../Logo/Logo";

export const Socials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a href="">
          <img className={styles.iconWrapper} src="/telegram.svg"></img>
        </a>
        <a href="">
          <img className={styles.iconWrapper} src="/github.svg"></img>
        </a>
        <a href="">
          <img className={styles.iconWrapper} src="/discord.svg"></img>
        </a>
      </div>
    </div>
  );
};
