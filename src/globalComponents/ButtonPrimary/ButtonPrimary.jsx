import React from 'react';

/* 
 Para poner poner el botón con box-shadow usar: shadow-regular
 */

const ButtonPrimary = ( { className, id, typeButton, text } ) => {

    return (
        <button className={`w-full text-center text-medium py-3 text-white bg-primary font-bold rounded-double focus:outline-none focus:ring-transparent ${className}`} type={typeButton} id={id}>{text}</button>
    )
}

export default ButtonPrimary;