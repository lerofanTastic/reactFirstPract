import React from "react";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.info}>
      <h3>Контакты:</h3>
      <div className={styles.text}>
        <p>
          Добро пожаловать в наш раздел контактов! Мы всегда рады новым
          знакомствам, идеям и предложениям. В нашем сообществе каждый голос
          важен, а обратная связь помогает нам расти и совершенствоваться. Здесь
          вы можете узнать, как связаться с нами через любимые социальные сети.
        </p>
      </div>
      <h3>Свяжитесь с нами через следующие каналы:</h3>
      <div className={styles.socials}>
        <div className={styles.icons}>
          <p>Telegram</p>
          <a href="">
            <img className={styles.iconWrapper} src="/telegram.svg"></img>
          </a>
        </div>
        <div className={styles.icons}>
          <p>Github</p>
          <a href="">
            <img className={styles.iconWrapper} src="/github.svg"></img>
          </a>
        </div>
        <div className={styles.icons}>
          <p>Discord</p>
          <a href="">
            <img className={styles.iconWrapper} src="/discord.svg"></img>
          </a>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          Спасибо, что остаётесь с нами! Ваше участие и поддержка вдохновляют
          нас каждый день. Не стесняйтесь писать, обсуждать и делиться своими
          идеями — вместе мы сделаем наш мир лучше.
        </p>
      </div>
    </div>
  );
};
