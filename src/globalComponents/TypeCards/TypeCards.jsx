import "./styles.css";
import React from 'react';

const TypeCards = ( { className, img, PayCard } ) =>{
    return (
        <div className={`TypeCards ${className}`}>
            <figure>
                <div>
                    <img src={img} alt={`Pagar con ${PayCard}`}/>
                </div>
            </figure>
        </div>
    )
}

export default TypeCards;