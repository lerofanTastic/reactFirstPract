import React, { useEffect, useState } from "react";
import styles from "./GoTop.module.css";

export const GoTop = () => {

const [ showGoTop, setShowGoTop ] = useState( false )

const handleVisibleButton = () => {
    setShowGoTop( window.pageYOffset > 20 )
}

const handleScrollUp = () => {
    window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
}

useEffect( () => {
    window.addEventListener( 'scroll', handleVisibleButton )
}, [] )

  return (
    <div className={ showGoTop ? styles.goTopText : styles.goTopHidden } onClick={ handleScrollUp }>
        <i className={styles.goTopText}/>
    </div>
  );
};
