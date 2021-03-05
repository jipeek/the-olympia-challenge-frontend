import "./styles.css";
import React from 'react';
import HeartVotes from "../HeartVotes/HeartVotes";
import ImgProfile from "../ImgProfile/ImgProfile";

const SwipeCollections = ( { className, img, nameColletion, votes, imgProfile, nameUser, QuantityProducts } ) => {
    return (
        <div className={`SwipeCollections bg-background02 rounded-costum w-full pt-4 px-5 pb-5  ${className}`}>
            <img src={img} alt="Imagen de colección" className="SwipeCollections__img object-cover rounded-costum w-full pb-3"/>

            <div className="flex flex-row justify-between items-start">
                <span className="SetupDetail__description text-white font-title text-lg font-bold font-heading">{nameColletion}</span>
                <HeartVotes votes={votes} />
            </div>

            <div className="flex flex-row justify-between items-end">
                <div className="">
                    <ImgProfile imgProfile={imgProfile} className="h-5 w-5 inline-block mr-2"/>
                    <span className="text-sm text-white">{nameUser}</span>
                </div>
                <span className="h-auto py-2 px-3 uppercase rounded-double text-colorful08 bg-gradient03 text-superSmall font-extrabold">{QuantityProducts}</span>
            </div>
        </div>
    )
}

export default SwipeCollections;