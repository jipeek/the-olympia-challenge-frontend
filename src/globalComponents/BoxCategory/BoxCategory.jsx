import React from 'react';
import "./styles.css";

const BoxCategory = ({ margin, className, img, nameCategory, QuantityProducts }) => {
  return (
    <div className={`BoxCategories ${margin}`}>
        <div className={`BoxCategories__img rounded-t-xl px-5 py-4 ${className}`}>
            <img src={img} className="" alt="cover" />
        </div>
        
        <div className="BoxCategories__content px-5 py-3.5 flex flex-col bg-background02 rounded-b-xl">            
            <span className="BoxCategories__description text-white text-medium font-semibold pb-1.5">{nameCategory}</span>
            <span className="text-colorplaceholder text-normal font-medium">{QuantityProducts}</span>
        </div>
    </div>
  )
}

export default BoxCategory;