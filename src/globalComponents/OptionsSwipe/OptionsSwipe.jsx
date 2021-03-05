import React from 'react';
import "./styles.css";

/* -----------------------------------
 Tipos de botones para invocar con las clases:
 .OptionsSwipe--buy
 .OptionsSwipe--heart
 .OptionsSwipe--close
 ------------------------------------- */

const OptionsSwipe = ({ className, img, id }) => {
  return (
    <button className={`OptionsSwipe flex justify-center items-center ${className}`} id={id}>
        <img src={img} alt=""/>
    </button>
  )
}

export default OptionsSwipe;