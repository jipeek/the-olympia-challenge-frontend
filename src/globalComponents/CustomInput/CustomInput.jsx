import React from 'react';

const CustomInput = ({ className, placeholder, typeInput }) =>{
    return (
        <div class={`w-full ${className}`}>
           <input class="border-none bg-background02 pl-medium py-regular text-regular  w-full rounded-costum placeholder-colorplaceholder text-white font-semibold focus:border-background02" placeholder={placeholder} type={typeInput}/>
        </div>
    )
}

export default CustomInput;