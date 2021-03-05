import './styles.css';
import React from 'react';

const ButtonOutline = ( { className, id, typeButton, text } ) => {
    return (
        <button className={`ButtonOutline w-full text-white text-center border-2 text-regular py-3 border-primary bg-transparent font-bold rounded-double focus:outline-none focus:ring-transparent ${className}`} type={typeButton} id={id}>{text}</button>
    )
}

export default ButtonOutline;