import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import useTimer from '../../hooks/useTimer';
import { formatTime } from '../../utils/format-time';
import './Timer.css'

const element = <FontAwesomeIcon icon={faClock} />

const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, handleSet } = useTimer(0)

  return (
    <div className="app">
      
      <div className='stopwatch-card'>
        <h3>Chronometer {element}</h3>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
          <button onClick={handleSet} disabled={!isActive}>Set</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;