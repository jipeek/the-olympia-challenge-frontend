import React from 'react';
import "./styles.css";
import heartWhite from "../../static/icons/fi-sr-heart-white.svg";

export const CardProductFavoriteSmall = ({ className, img, imgProfile }) => {
  return (
    <div className={`CardProductFavoriteSmall w-full bg-gradient01 rounded-xl overflow-hidden relative ${className}`}>
      <div className="CardProductFavoriteSmall__content rounded-xl bg-background02">
        <img src={img} className="object-cover rounded-xl w-full h-full" alt="cover" />
      </div>
      <div className="CardProductFavoriteSmall__content py-4 px-3 rounded-xl">
        <div className="flex flex-row items-center h-7 justify-between">
          <span>
            <img src={imgProfile} className="object-cover h-5 w-5 inline-block mr-2 rounded-full" alt="profile img" />
            <span className="text-sm text-white">Marie Curie</span>
          </span>
          <span className="bg-background01 py-0.5 px-2.5 rounded-full flex justify-center">
            <img src={heartWhite} className="mr-1.5" alt="heart icon" />
            <span className="text-white text-sm">25</span>
          </span>
        </div>
        <span className="CardProductFavoriteSmall__description text-white text-lg font-bold">Mi setup minimalista para trabajar</span>
      </div>
    </div>
  )
}
