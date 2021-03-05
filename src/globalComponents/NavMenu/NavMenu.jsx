import React, { useEffect, useState } from 'react';
import "./styles.css";

// Icons
import Home from "../../static/nav/Home.svg";
import Search from "../../static/nav/Search.svg";
import Categories from "../../static/nav/Categories.svg";
import Notications from "../../static/nav/Notications.svg";
import Burger from "../../static/nav/burger.svg";
import { Link, useHistory } from 'react-router-dom';

/* 
 Para activar el triangulo morado usar la clase
 .active en button
 */

const NavMenu = ({ className, activeView }) => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    console.log(history.location.pathname);
    setCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`NavMenu pb-10 pt-4 px-12 bg-background01 flex flex-row justify-between ${className}`}>
      <Link to="/home" className={`focus:outline-none focus:ring-transparent ${currentPath === '/home' ? 'active' : ''}`}>
        <img className="NavMenu__icon" src={Home} alt="home icon" />
      </Link>
      <Link to="/search" className={`focus:outline-none focus:ring-transparent ${currentPath === '/search' ? 'active' : ''} `}>
        <img className="NavMenu__icon" src={Search} alt="search icon" />
      </Link>
      <Link to="/categories" className={`focus:outline-none focus:ring-transparent ${currentPath === '/categories' ? 'active' : ''} `}>
        <img className="NavMenu__icon" src={Categories} alt="categories icon" />
      </Link>
      <Link to="/account/notifications" className={`focus:outline-none focus:ring-transparent ${currentPath === '/account/notifications' ? 'active' : ''} `}>
        <img className="NavMenu__icon" src={Notications} alt="notification icon" />
      </Link>
      <Link to="/account" className={`focus:outline-none focus:ring-transparent ${currentPath === '/account' ? 'active' : ''} `}>
        <img className="NavMenu__icon" src={Burger} alt="profile icon" />
      </Link>
    </div>
  )
}

export default NavMenu;