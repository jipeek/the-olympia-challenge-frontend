import "./styles.css";
import React from 'react';
import heart from "../../static/icons/fi-sr-heart.svg";

const CardProductHorizontal = ({ img, alt, title, price, footer }) =>{
    return (
        <div class="CardProductHorizontal rounded-costum bg-background02 flex flex-row">
           <div className="CardProductHorizontal__img bg-colorplaceholder rounded-l-costum flex justify-center align-center">
               <img class="p-2" src={img} alt={alt}/>
           </div>
           <div className="CardProductHorizontal__info w-full flex flex-col justify-between py-4 px-2">
               <div className="CardProductHorizontal__top text-white xxs:mb-4">
                    <p className="CardProductHorizontal__title text-small mb-1.5 font-medium">{title}</p>
                    <p className=" font-bold text-xl">{price}</p>
               </div>
               <div className="CardProductHorizontal__bottom text-white flex flex-row justify-between">
                    <span className="text-normal font-medium">{footer}</span>
                    <span>
                        <img src={heart} alt="heart icon" />
                    </span>
               </div>
           </div>
        </div>
    )
}

export default CardProductHorizontal;