import React from 'react';
import { Stars } from '../Stars/Stars';
import './styles.css';

export const Review = ({ className, review }) => {
  return (
    <div className={`flex flex-col text-white ${className}`}>
      <div className="flex flex-row items-center mb-2.5">
        <img className="h-9 w-9 rounded-full object-cover mr-3" src={review.username.imgProfile} alt="" />
        <div>
          <div className="text-base font-bold">{review.username.name}</div>
          <div className="text-base text-background03">{review.date.toLocaleDateString('es-Us', {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}</div>
        </div>
      </div>
      <div className="Review__start-container mb-3 w-6/12">
        <Stars step={review.stars} disabled={review?.disabled || false} />
      </div>
      <div>
        <p className="text-sm">{review.review}</p>
      </div>
    </div>
  )
}
