import React from 'react';

const CustomButton = (props) =>{
    console.log(props);
    return (
        <div>
            <button >
                esto es el boton azul
                {props.title}
            </button>
        </div>
    )
}

export default CustomButton;