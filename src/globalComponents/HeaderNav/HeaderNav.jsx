import "./styles.css";
import React from 'react';
import ArrowBack from "../../static/icons/ArrowBack.svg";

const HeaderNav = ({ className, onClick, text }) => {
    return (
        <header className={`grid HeaderNav__grid items-center mr-7 ${className}`}>
            <button className="focus:outline-none focus:ring-transparent " onClick={onClick}><img src={ArrowBack} alt="Icon back" /></button>
            <h1 className="ml-13 text-white font-bold text-lg text-center">{text}</h1>
        </header>
    )
}

export default HeaderNav;


