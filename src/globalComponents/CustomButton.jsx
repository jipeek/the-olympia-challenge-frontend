import React from 'react';

const CustomButton = (props) =>{
    console.log(props);
    return (
        <div>
            <button >
                {props.title}
            </button>
        </div>
    )
}

export default CustomButton;