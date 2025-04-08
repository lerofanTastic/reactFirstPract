import React from 'react'
import { Link } from 'react-router-dom'

export const AnimeList = ({ animeList }) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {
            animeList.map(anime => <Link to={`${anime.id}`}>{anime.title}</Link>)
        }
    </div>
  )
}
