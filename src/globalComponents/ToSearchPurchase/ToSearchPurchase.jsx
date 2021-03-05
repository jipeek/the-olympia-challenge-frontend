import "./styles.css";
import React from 'react';

const ToSearchPurchase = ({ img, alt, title, price, nPurchase }) =>{
    return (
        <div class="ToSearchPurchase rounded-costum bg-background02 flex flex-row">
           <div className="ToSearchPurchase__img bg-colorplaceholder rounded-l-costum flex justify-center align-center">
               <img class="p-2" src={img} alt={alt}/>
           </div>
           <div className="ToSearchPurchase__info w-full flex flex-col justify-between pt-4 px-2 pb-3">
               <div className="ToSearchPurchase__top text-white xxs:mb-4">
                    <p className="ToSearchPurchase__title text-small mb-1.5 font-medium">{title}</p>
                    <p className=" font-bold text-xl font-title">{price}</p>
               </div>
                <span className="text-normal text-background03 font-medium">{nPurchase}</span>
           </div>
        </div>
    )
}

export default ToSearchPurchase;