import React from 'react';

const TacksSearch = ({ title, className }) => {
    return (
        <button className={`bg-background02 rounded-md p-2.5 pt-2 text-white w-max block ${className}`}>
            <span className="inline-block text-xs font-medium">{title}</span>
        </button>
    )
}

export default TacksSearch;