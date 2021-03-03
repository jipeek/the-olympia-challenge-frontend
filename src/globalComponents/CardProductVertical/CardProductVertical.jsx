import "./styles.css";
import React from 'react'
import heart from "../../static/icons/fi-sr-heart.svg";

export const CardProductVertical = ({ img, title, price, footer, className }) => {


  return (
    <div className={`CardProductVertical bg-background02 rounded-xl overflow-hidden ${className}`}>
      <div className="CardProductVertical__image bg-background03 flex justify-center items-center">
        <img src={img} alt="" />
      </div>
      <div className="text-white flex flex-col px-2.5 pt-2.5">
        <p className="text-xs mb-1">{title}</p>
        <p className="font-bold text-xl mb-1.5 font-heading">{price}</p>
      </div>
      <div className="text-white px-2.5 pb-2.5 flex justify-between">
        <span className="text-background03">{footer}</span>
        <span>
          <img src={heart} alt="heart icon" />
        </span>
      </div>
    </div>
  )
}
