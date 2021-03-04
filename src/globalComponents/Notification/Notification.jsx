import "./styles.css";
import React from 'react';

const Notification = ( { className, img, notificationText, text } ) => {
    return (
        <div className={`Notification bg-background02 rounded-costum flex flex-row items-start font-medium py-5 pl-5 pr-3 ${className}`} >
            <img src={img} alt={`Icono de Notificación`} className="Notification__figure"></img>
            <div className="Notification__info flex flex-col pl-5">
                <span className="text-white font-bold text-medium font-title">{notificationText}</span>
                <span className="text-normal text-background03">{text}</span>
            </div>
        </div>
    )
}

export default Notification;