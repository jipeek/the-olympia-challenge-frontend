import "./styles.css";
import React from 'react';

const RadioButton = ( { classBox, nameInput, id } ) => {    
    return (
        <input className={`RadioButton focus:border-background02 focus:border-colorful01 ${classBox}`} type="radio" name={nameInput} id={id}/>
    )
}

export default RadioButton;