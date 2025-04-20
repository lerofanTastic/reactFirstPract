import React from "react";
import { Link } from "react-router-dom";
import styles from "./AnimeList.module.css";

export const AnimeList = ({ animeList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {animeList.map((anime) => (
          <Link to={`${anime.id}`}>
            <img className={styles.img} src={anime.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};
