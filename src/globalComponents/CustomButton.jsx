import React from 'react';

const CustomButton = ({ title, icon }) => {
    return (
        <button className="bg-background02 rounded-md p-3 text-white flex flex-row w-max items-center">
            <img src={icon} className="mr-2.5" alt="icon" />
            <span className="text-xs">{title}</span>
        </button>
    )
}

export default CustomButton;