import React from 'react';

const CustomButton = (props) =>{
    console.log(props);
    return (
        <button className="bg-background02 rounded-md p-3 text-white">
            <span>📢</span> {props.title}
        </button>
    )
}

export default CustomButton;