import React, { useState } from 'react';
import Timer from './Timer';

const App = () => {
  const [isWorking, setIsWorking] = useState(true);

  const handleTimerEnd = () => {
    setIsWorking(!isWorking);
  };

  return (
    <div>
      <h1>{isWorking ? 'Work Timer' : 'Break Timer'}</h1>
      <Timer duration={isWorking ? 1500 : 300} onTimerEnd={handleTimerEnd} />
    </div>
  );
};

export default App;

