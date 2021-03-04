import "./styles.css";
import React from 'react';
import RadioButton from "../RadioButton/RadioButton";

const RadioSelect = ( { className, text, checked } ) => {

    return (
        <div className={`RadioSelect w-full text-white flex flex-row py-4 items-center ${className}`}>
            <RadioButton checked={checked} />
            <label className="RadioSelect__title pl-2.5 text-medium">{text}</label>
        </div>
    )
}

export default RadioSelect;