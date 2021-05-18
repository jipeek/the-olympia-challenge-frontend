import "./styles.css";
import React from 'react';

/* --------------------------
  Si quieres hacer un input de password debes usar la clase: LoginInput--psswd
 ---------------------------- */

const LoginInput = ({ className, labelName, typeInput, nameInput, placeholder, value, onChange }) => {
    return (
        <div className={`LoginInput flex flex-col justify-between font-medium mb-6 ${className}`} >
            <label className="uppercase tracking-wide text-grey text-superSmall font-bold pb-2" htmlFor="">{labelName}</label>
            <input className="LoginInput__input text-white placeholder-colorplaceholder text-medium border-0 border-b-2 py-3 pl-0 font-semibold font-sans border-background02 focus:border-colorful05 focus:outline-none focus:ring-transparent" name={nameInput} type={typeInput} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default LoginInput;