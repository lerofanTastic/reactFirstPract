import React, { useEffect, useState } from 'react';
import styles from "./Card.module.css"


export const Card = ({
    title="No Title :(", 
    description="No Description :(", 
    image="No Image :(", 
    rating="No Rating :(", 
    year="No Year :(",
}) => {
    return (
        <div className={`${styles.card} ${year > 2020 && styles.green}`}>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
            <div className={styles.poster}>
                <img className={styles.image} src={image} alt={`${title} poster`} />
            </div>
            <div className={styles.bottom}>
                <p>Year: {year}</p>
                <p>Rating: {rating}</p>
            </div>
            
        </div>
    )
}




    