import React from 'react';

const CustomButton = ({title}) => {
    return (
        <div className="view">
      
            <span className="text-xs">{title}</span>
            <button className="bg-primary rounded text-white flex flex-row w-max items-center">
                {/* <img src={icon} className="mr-2.5" alt="icon" /> */}

            
            </button>
        </div>
    )
}

export default CustomButton;