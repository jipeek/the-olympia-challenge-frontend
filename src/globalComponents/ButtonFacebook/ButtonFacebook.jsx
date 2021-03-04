import "./styles.css";
import React from 'react';
import IconFacebook from "../../static/icons/IconFacebook.svg";

const ButtonFacebook = ( { className, id, typeButton } ) => {

    return (
        <button className={`ButtonFacebook w-full text-center border text-medium py-4 border-grey bg-transparent font-bold rounded-double focus:outline-none focus:ring-transparent ${className}`} type={typeButton} id={id}><img className="ButtonFacebook__img mx-auto" src={IconFacebook} alt="" /></button>
    )
}

export default ButtonFacebook;