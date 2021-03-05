import React from 'react';
import "./styles.css";

// Icons
import Home from "../../static/nav/Home.svg";
import Search from "../../static/nav/Search.svg";
import Categories from "../../static/nav/Categories.svg";
import Notications from "../../static/nav/Notications.svg";
import Burger from "../../static/nav/Burger.svg";

/* 
 Para activar el triangulo morado usar la clase
 .active en button
 */

const NavMenu = ({ className, activeView, onClick }) => {
  return (
    <div className={`NavMenu pb-10 pt-4 px-12 bg-background01 flex flex-row justify-between ${className}`}>
        <button className={`focus:outline-none focus:ring-transparent ${activeView}`} onClick=""><img className="NavMenu__icon" src={Home} alt=""/></button>
        <button className={`focus:outline-none focus:ring-transparent `} onClick=""><img className="NavMenu__icon" src={Search} alt=""/></button>
        <button className={`focus:outline-none focus:ring-transparent `} onClick=""><img className="NavMenu__icon" src={Categories} alt=""/></button>
        <button className={`focus:outline-none focus:ring-transparent `} onClick=""><img className="NavMenu__icon" src={Notications} alt=""/></button>
        <button className={`focus:outline-none focus:ring-transparent `} onClick=""><img className="NavMenu__icon" src={Burger} alt=""/></button>
    </div>
  )
}

export default NavMenu;
