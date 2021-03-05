import React from 'react';
import "./styles.css";
import heart from "../../static/icons/fi-sr-heart.svg";

export const CardProductSquare = ({ img, price, className, questionData }) => {
  // console.log(questionData, 'questioDataCard');
  // [questionData].map((qData)=> { 
  
  //   console.log( qData, 'name');
  // });
  return (
    <div className={`section-products__card ${className}`}>
      <div className="section-products__img bg-background03 rounded-xl flex justify-center items-center p-2">
        <img src={img} className="object-cover" alt="" />
      </div>
      <div className="text-white flex flex-col pt-2.5">
        <p className="text-xs mb-1 truncate">Organizador de escritorios</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl mb-1.5 font-heading">{price}</span>
          <span className="mb-2">
            <img src={heart} alt="heart icon" />
          </span>
        </div>
      </div>
    </div>
  )
}
