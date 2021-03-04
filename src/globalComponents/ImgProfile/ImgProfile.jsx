import React from 'react';

const ImgProfile = ({ className, imgProfile }) => {
    return (
        <img src={imgProfile} className={`object-cover inline-block rounded-full ${className}`} alt="profile img" />
    )
}

export default ImgProfile;