import React from 'react';

const CustomButton = ({ title, icon, className }) => {
    return (
        <button className={`bg-background02 rounded-md p-3 text-white w-max block ${className}`}>
            <img src={icon} className="inline-block mr-2.5" alt="icon" />
            <span className="inline-block text-xs">{title}</span>
        </button>
    )
}

export default CustomButton;