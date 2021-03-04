import "./styles.css";
import React from 'react';

const VariationLink = ( { url, className, text } ) => {

    return (
        <a href={url} className={`VariationLink w-full text-white py-5 px-2 items-center text-regular  bg-transparent font-medium focus:outline-none focus:ring-transparent ${className}`}>{text}</a>
    )
}

export default VariationLink;