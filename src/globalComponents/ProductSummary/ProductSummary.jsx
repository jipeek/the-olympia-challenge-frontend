import "./styles.css";
import React from 'react';

const ProductSummary = ( { img, alt, title, und, price } ) =>{
    return (
        <div className="ProductSummary flex flex-row pb-4.5">
           <div className="ProductSummary__img flex justify-center align-center">
               <img className="p-2" src={img} alt={alt}/>
           </div>
           <div className="ProductSummary__info w-full flex flex-col justify-between text-white py-4 px-2">
                <p className="ProductSummary__title text-normal mb-1.5 font-medium">{title}</p>
                <p className="text-normal font-medium">{und}</p>
                <p className="text-normal font-medium">{price}</p>
           </div>
        </div>
    )
}

export default ProductSummary;