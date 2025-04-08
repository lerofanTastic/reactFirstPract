import React from 'react'
import styles from "./Main.module.css"
import { Card } from '../Card/Card'
import { topAnime } from "../../constants/topAnime.js"

export const Main = () => {
  return (
    <main className={styles.main}>
      {topAnime.map((anime) => (
        <Card
          key={anime.id}
          title={anime.title} 
          description={anime.description} 
          image={anime.image} 
          rating={anime.rating} 
          year={anime.year} 
        />
      ))}
    </main>
  )
}
