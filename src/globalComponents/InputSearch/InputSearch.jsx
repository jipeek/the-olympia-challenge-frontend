import React from 'react';
import search from "../../static/icons/Search.svg";

const InputSearch = ( {placeholder} ) =>{
    return (
        <form action="" className="mt-6">
            <div className="flex flex-row items-center justify-between w-full mb-4 relative h-15 rounded mb-6">
                <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                            <img src={search} alt="search icon" />
                        </button>
                    </span>
                    <input type="search" name="q" className="py-3 text-white text-regular font-semibold w-full rounded-costum pl-10 focus:border-background02 focus:border-colorful01 bg-background02 w-full border-background02 placeholder-colorplaceholder" placeholder={placeholder} />
                </div>
            </div>
        </form>
    )
}

export default InputSearch;