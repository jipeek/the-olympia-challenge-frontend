import "./styles.css";
import React from 'react';

const MiniBoxCategory = ({ margin, className, img, nameCategory }) => {
  return (
    <div className={`MiniBoxCategory ${margin}`}>
        <div className={`MiniBoxCategory__img rounded-t-xl flex justify-center items-center ${className}`}>
            <img src={img} className="" alt="Imagen de categoría" />
        </div>
        
        <div className="MiniBoxCategory__content px-3 pt-2 pb-2.5 flex flex-col bg-background02 rounded-b-xl">            
            <span className="MiniBoxCategory__description text-white text-small font-semibold">{nameCategory}</span>
        </div>
    </div>
  )
}

export default MiniBoxCategory;