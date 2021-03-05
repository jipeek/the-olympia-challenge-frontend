import "./styles.css";
import React from 'react';
import ImgProfile from "../ImgProfile/ImgProfile";
import Camera from "../../static/icons/Camera.svg";

const EditImgProfile = ({ className, url, imgProfile }) => {
    return (
        <a href={url} className={`EditImgProfile overflow-hidden relative rounded-full ${className}`}>
            <img className="EditImgProfile__camera" src={Camera} alt="Icono de cámara"/>
            <div className="EditImgProfile__blue"></div>
            <ImgProfile imgProfile={imgProfile} className="EditImgProfile__photo inline-block"/>
        </a>
    )
}

export default EditImgProfile;