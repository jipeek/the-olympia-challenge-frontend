import "./styles.css";
import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import TypeCards from "../TypeCards/TypeCards";

const OtherMethods = ( { className, textPay, img } ) => {

    return (
        <div className={`OtherMethods w-full text-white flex flex-row py-4 justify-between items-center ${className}`}>
            <div className="OtherMethods_select inline-flex">
                <RadioButton />
                <p className="OtherMethods__title text-white pl-2 text-medium">{textPay}</p>
            </div>
            <TypeCards img={img} classCard="TypeCards--others" />
        </div>
    )
}

export default OtherMethods;