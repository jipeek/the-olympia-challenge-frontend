import React from 'react';
import './styles.css';
import Check from '../../static/icons/Check.svg';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export const Steps = ({ numberSteps = 2, step = 1 }) => {
  const stepsIcons = Array.from(Array(numberSteps), (_, x) => x);
  const percent = ((step - 1) / (numberSteps - 1)) * 100
  return (
    <div className="block p-4">
      <ProgressBar
        percent={percent > 100 ? 100 : percent < 0 ? 0 : percent}
        filledBackground="#246BFD"
      >
        {stepsIcons.map(() => (
          <Step transition="">
            {({ accomplished, _, index }) => (
              <div className={`Steps__icon relative bg-background01 rounded-full border-solid border-primary flex items-center justify-center ${accomplished ? 'Steps__border__active' : 'Steps__border__disabled'}`}>
                <img
                  src={Check}
                  className={accomplished ? `block` : `hidden`}
                  alt="icon"
                />
                {(step === index + 1) && (<div className="Steps__icon__full bg-primary rounded-full"></div>)}
              </div>
            )}
          </Step>
        ))}
      </ProgressBar>
    </div>
  )
}
