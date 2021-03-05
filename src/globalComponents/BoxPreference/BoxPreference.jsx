import "./styles.css";
import React from 'react';

const BoxPreference = ({ img, alt, text }) =>{
    return (
        <div class="BoxPreference w-full rounded-costum">
            <div className="BoxPreference__info w-full flex flex-row">
                <span className="text-white text-regular font-bold">{text}</span>
            </div>
            <img src={img} alt={alt}/>
        </div>
    )
}

export default BoxPreference;