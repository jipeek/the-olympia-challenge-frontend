import "./styles.css";
import React from 'react';

const NotificationPounts = ( { className, img, notificationText, date, pounts } ) => {
    return (
        <div className={`NotificationPounts bg-background02 rounded-costum flex flex-row items-center font-medium py-5 pl-5 pr-3 ${className}`} >
            <img src={img} alt={`Icono de Notificación`} className="NotificationPounts__figure"></img>
            <div className="NotificationPounts__info flex flex-col pl-5">
                <span className="text-white font-bold text-medium">{notificationText}</span>
                <span className="text-normal text-background03">{date}</span>
            </div>
            <span className="text-colorful08 font-semibold rounded-costum px-3 ml-auto bg-colorful05">{pounts}</span>
        </div>
    )
}

export default NotificationPounts;