import React, { useEffect, useState } from 'react';
import './styles.css';
import starFull from '../../static/icons/StarFull.svg';
import starLine from '../../static/icons/StarLine.svg';

/**
 * **Example**
 *
 * ```
 * const [currentStar, setCurrentStar] = useState(0);
 *
 * useEffect(() => {
 *     // code here
 * }, [currentStar]);
 *
 * <Stars className="mb-4" onChange={setCurrentStar} />
 * ```
 *
 * **Params**
 *
 * - **onChange** [function]: returns current star selected
 * - **className** [string]: add more css classes
 *
 */
export const Stars = ({ onChange = () => { }, step = false, className, disabled = false }) => {
  const [stars, setStars] = useState([
    {
      activate: false
    },
    {
      activate: false
    },
    {
      activate: false
    },
    {
      activate: false
    },
    {
      activate: false
    },
  ]);
  const [currentStar, setCurrentStar] = useState(false);

  useEffect(() => {
    if (step !== false) {
      const currentStar = step - 1;
      const starsUpdated = stars.map((starAux, i) => {
        if (i <= currentStar) {
          starAux.activate = true;
          return starAux;
        } else {
          starAux.activate = false;
          return starAux;
        }
      });
      setCurrentStar(currentStar);
      setStars([...starsUpdated])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStar]);

  useEffect(() => {
    onChange(currentStar);
  }, [currentStar, onChange]);

  const handleClick = (stars, star) => {
    if (disabled) return;
    let starUpdatedIndex = stars.indexOf(star);
    const starsUpdated = stars.map((starAux, i) => {
      if (i <= starUpdatedIndex) {
        starAux.activate = true;
        return starAux;
      } else {
        starAux.activate = false;
        return starAux;
      }
    });
    setCurrentStar(starUpdatedIndex);
    setStars([...starsUpdated])
  }

  return (
    <div className={`${className}`}>
      <div className="flex flex-row justify-between">
        {stars.map((star, i) => (
          <img
            src={star.activate === true ? starFull : starLine}
            onClick={() => handleClick(stars, star)}
            className={`w-full ${disabled ? '' : 'cursor-pointer'}`}
            alt="Star Full"
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
