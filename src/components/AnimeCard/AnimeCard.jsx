import React from 'react'
import { useParams } from 'react-router-dom'

export const AnimeCard = ({animeList}) => {
    let { id } = useParams();
    const anime = animeList.find((anime) => anime.id === Number(id));
  return (
    <div>
        <h1>{anime.title}</h1>
        <p>{anime.year}</p>
        <p>{anime.rating}</p>
    </div>
  )
}
