import "./styles.css";
import React from 'react';
import Checkbox from "../Checkbox/Checkbox";

const CheckList = ( { className, text } ) => {

    return (
        <div className={`CheckList w-full text-white flex flex-row py-3.5 px-4 justify-between ${className}`}>
            <p className="CheckList__title text-medium font-semibold">{text}</p>
            <Checkbox classBox="Checkbox--blueline" />
        </div>
    )
}

export default CheckList;