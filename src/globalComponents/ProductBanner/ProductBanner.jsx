import React from 'react';
import "./styles.css";

export const ProductBanner = ({ className }) => {
  return (
    <div className={`ProductBanner w-full rounded-xl relative ${className}`}>
      <div className="ProductBanner__content py-4 px-3 rounded-xl">
        {/* <img src={ } className="object-cover h-5 w-5 inline-block mr-2 rounded-full" alt="profile img" /> */}
        <div className="ProductBanner__description text-black text-lg font-bold">Colección Home Office</div>
        <div className="ProductBanner__discount text-black text-4xl font-bold">35% OFF</div>
      </div>
    </div>
  )
}
