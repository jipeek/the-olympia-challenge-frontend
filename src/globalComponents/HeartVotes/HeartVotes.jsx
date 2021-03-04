import React from 'react';
import "./styles.css";
import heart from "../../static/icons/fi-sr-heart-white.svg";

const HeartVotes = ({ className, votos }) => {
  return (
        <div className={`bg-background01 h-auto py-1 px-3 rounded-double inline-flex items-center justify-center ${className}`}>
            <img src={heart} className="mr-1.5" alt="heart icon" />
            <span className="text-white text-small font-medium">{votos}</span>
        </div>
  )
}

export default HeartVotes;