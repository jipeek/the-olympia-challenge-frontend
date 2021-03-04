import "./styles.css";
import React from 'react';
import ArrowRight from "../../static/icons/ArrowRight.svg";

const LinkWithArrow = ( { className, url, text } ) => {

    return (
        <a href={url} className={`LinkWithArrow w-full text-white flex flex-row py-3 px-4 justify-between ${className}`}>
            <p className="LinkWithArrow__title text-regular font-semibold">{text}</p>
            <img src={ArrowRight} alt="flecha hacia la izquierda"/>
        </a>
    )
}

export default LinkWithArrow;