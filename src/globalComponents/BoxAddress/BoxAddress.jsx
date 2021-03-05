import React from 'react';

const BoxAddress = ( { title, infoTracking } ) =>{
    return (
        <div className="BoxAddress rounded-costum bg-background02 w-full flex flex-col p-4">
            <span className="text-medium text-white mb-2.5 font-title font-semibold">{title}</span>
            <span className="text-normal text-colorplaceholder font-medium">{infoTracking}</span>
        </div>
    )
}

export default BoxAddress;