import "./styles.css";
import React from 'react';

/* ----------------------------
 Variaciones Clases de CSS:
 .Checkbox--blueline
 .Checkbox--circle
 ------------------------------ */

const Checkbox = ( { classBox, nameInput, id, checked } ) => {    
    return (
            <input className={`Checkbox focus:border-background02 focus:border-colorful01 ${classBox}`} type="checkbox" name={nameInput} id={id} checked={checked}/>
    )
}

export default Checkbox;