import "./styles.css";
import React from 'react';

const TypeCards = ( { classCard, img, PayCard } ) =>{
    return (
        <div className={`TypeCards ${classCard}`}>
            <img src={img} alt={`Pagar con ${PayCard}`}/>
        </div>
    )
}

export default TypeCards;