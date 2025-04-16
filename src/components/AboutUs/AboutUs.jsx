import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./AboutUs.module.css";
import { Animation } from "../Animation/Animation";

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Link to="contacts">
          <button>
            <p className={styles.verticalText}>contacts</p>
          </button>
        </Link>
      </div>
      <div className={styles.container}>
        <Outlet />
        <Animation />
      </div>
      <div className={styles.info}>
        <Link to="about">
        <button>
            <p className={styles.verticalText}>about</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
