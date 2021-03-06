import "./styles.css";
import React from 'react';

const ProductOnOrder = ({ className, img, alt, title, price, footer, Delete, selected }) =>{
    return (
        <div class={`ProductOnOrder rounded-costum bg-background02 flex flex-col py-2.5 ${className}`}>
           <div className=" w-full flex justify-center items-start pb-3 px-4">
               <div className="ProductOnOrder__img bg-colorplaceholder rounded">
                <img class="p-2" src={img} alt={alt}/>
               </div>

                <div className="ProductOnOrder__info w-full flex flex-col justify-between pl-2.5">
                    <div className="ProductOnOrder__top text-white xxs:mb-7">
                        <p className="ProductOnOrder__title text-small font-medium">{title}</p>
                        <span className="text-normal text-primary font-medium">{footer}</span>
                    </div>
                    <div className="ProductOnOrder__bottom text-white flex flex-row justify-between">
                        <select className="w-12" name="" id="">
                            <option value="1und" selected={selected}>1</option>
                            <option value="2und" >2</option>
                            <option value="3und">3</option>
                            <option value="4und">4</option>
                            <option value="5und">5</option>
                            <option value="6und">6</option>
                        </select>
                        <p className=" font-bold text-xl font-title">{price}</p>
                    </div>
                </div>
           </div>

           <div className="border-t border-colorplaceholder pt-2 5">
               <span className="text-colorful07 font-medium text-regular px-4">{Delete}</span>
           </div>

        </div>
    )
}

export default ProductOnOrder;