import "./styles.css";
import React from 'react';
import Checkbox from "../Checkbox/Checkbox";

const PreferencesCards = ({ className, img, alt, text, nameInput, checked }) =>{
    return (
        <div class={`PreferencesCards w-full rounded-costum ${className}`}>
            <div className="PreferencesCards__info w-full flex flex-row">
                <span className="text-white text-regular font-bold">{text}</span>
                <Checkbox classBox="Checkbox--circle Checkbox--blueline PreferencesCards__check" nameInput={nameInput} checked={checked} />
            </div>
            <img src={img} alt={alt}/>
        </div>
    )
}

export default PreferencesCards;