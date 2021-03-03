import React from 'react';
import "./styles.css";
import discountBanner from "../../static/icons/discount_banner.svg"

export const ProductBanner = ({ description, price, className }) => {
  return (
    <div className={`ProductBanner w-full rounded-xl relative ${className}`}>
      <div className="ProductBanner__content py-4 px-3 rounded-xl">
        <img src={discountBanner} className="ProductBanner__img" alt="profile img" />
        <div className="ProductBanner__content py-4 px-3 rounded-xl">
          <div className="ProductBanner__description text-black text-lg font-bold font-heading">{description}</div>
          <div className="ProductBanner__discount text-black text-4xl font-bold font-heading">{price}</div>
        </div>
      </div>
    </div>
  )
}
