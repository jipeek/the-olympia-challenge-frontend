import "./styles.css";
import React from 'react';
import Checkbox from "../Checkbox/Checkbox";

const PreferencesCards = ({ img, alt, text }) =>{
    return (
        <div class="PreferencesCards w-full rounded-costum">
            <div className="PreferencesCards__info w-full flex flex-row">
                <span className="text-white text-regular font-bold">{text}</span>
                <Checkbox classBox="Checkbox--circle" />
            </div>
            <img src={img} alt={alt}/>
        </div>
    )
}

export default PreferencesCards;