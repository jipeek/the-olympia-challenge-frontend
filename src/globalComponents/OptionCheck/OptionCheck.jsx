import React from 'react';
import Checkbox from "../Checkbox/Checkbox";

const OptionCheck = ( { className, text, checked } ) => {

    return (
        <div className={`OptionCheck w-full text-white flex flex-row py-6 justify-between ${className}`}>
            <p className="OptionCheck__title text-medium font-semibold">{text}</p>
            <Checkbox checked={checked} />
        </div>
    )
}

export default OptionCheck;