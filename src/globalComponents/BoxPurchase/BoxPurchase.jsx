import "./styles.css";
import React from 'react';

const BoxPurchase = ( { img, alt, title, urlTracking, urlDetails } ) =>{
    return (
        <div className="BoxPurchase rounded-costum bg-background02 flex flex-row p-4">
           <div className="BoxPurchase__img flex">
               <img className="p-2" src={img} alt={alt}/>
           </div>
           <div className="BoxPurchase__info w-full pl-3 flex flex-col justify-between text-white">
                <p className="BoxPurchase__title text-medium mb-3 xxs:mb-6 font-semibold">{title}</p>
                <div className="BoxPurchase__actions flex justify-between">
                    <a href={urlTracking} className="text-regular font-semibold">Rastrear</a>
                    <a href={urlDetails} className="text-regular font-semibold text-primary">Detalles</a>
                </div>
           </div>
        </div>
    )
}

export default BoxPurchase;