import "./styles.css";
import React from 'react';

/* --------------------------
  Clases para poder invocar los iconos correspondientes:
  .CardsAccount--bag
  .CardsAccount--gift
  .CardsAccount--coupons
  .CardsAccount--favs
 ---------------------------- */


const CardsAccount = ( { className, text } ) => {

    return (
        <div className={`CardsAccount bg-background02 rounded-costum flex flex-col font-medium p-5 ${className}`} >
            <div className="CardsAccount__figure rounded-costum p-2 pb-1 mb-3"></div>
            <span className="text-white" >{text}</span>
        </div>
    )
}

export default CardsAccount;