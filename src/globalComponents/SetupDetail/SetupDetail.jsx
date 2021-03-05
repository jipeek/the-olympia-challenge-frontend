import React from 'react';
import "./styles.css";
import heart from "../../static/icons/fi-sr-gr-heart.svg";
import ImgProfile from "../ImgProfile/ImgProfile";

const SetupDetail = ({ className, img, imgProfile, nameUser, nameColletion, votos, products }) => {
  return (
    <div className={`SetupDetail ${className}`}>
      <div className="SetupDetail__product w-full bg-gradient01 rounded-t-xl overflow-hidden relative">
        <div className="SetupDetail__img rounded-xl bg-background01">
            <img src={img} className="object-cover rounded-t-xl w-full h-full rounded-t-costum" alt="cover" />
        </div>
      </div>
      
      <div className="SetupDetail__content pt-4 px-2.5 pb-3.5 bg-background02 rounded-b-xl">

        <div className="flex flex-col justify-between">
            
          <div className="flex items-start justify-between pb-3">
            <span className="SetupDetail__description text-white font-title text-lg font-bold font-heading">{nameColletion}</span>
            <div className="border-colorful02 border-2 h-auto py-1 px-3 rounded-double inline-flex items-center justify-center">
                <img src={heart} className="mr-1.5" alt="heart icon" />
                <span className="text-colorful02 text-small">{votos}</span>
            </div>
          </div>
        
          <div className="flex items-center justify-start relative">
            <ImgProfile imgProfile={imgProfile} className="h-5 w-5 inline-block mr-2"/>
            <span className="text-sm text-white">{nameUser}</span>
            <div className="SetupDetail__circle mx-2"></div>
            <span className="text-colorplaceholder text-normal">{products}</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SetupDetail;