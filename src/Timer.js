import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimerEnd }) => {
  const [time, setTime] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);

        if (time === 0) {
          clearInterval(interval);
          setIsActive(false);
          onTimerEnd();
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, onTimerEnd]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(duration);
  };

  return (
    <div>
      <div>Time: {time} seconds</div>
      <button onClick={handleStartPause}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
