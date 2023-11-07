import React, { useState, useEffect } from 'react';

function LiveTimer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default LiveTimer;
