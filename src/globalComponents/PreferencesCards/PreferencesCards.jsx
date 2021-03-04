import "./styles.css";
import React from 'react';

const PreferencesCards = ({ img, alt, text }) =>{
    return (
        <div class="PreferencesCards w-full rounded-costum">
            <div className="PreferencesCards__info w-full flex flex-row">
                <span className="text-white text-regular font-bold">{text}</span>
                <input className="PreferencesCards__check focus:border-background02 focus:border-colorful01" type="checkbox" name="" id=""/>
            </div>
            <img src={img} alt={alt}/>
        </div>
    )
}

export default PreferencesCards;