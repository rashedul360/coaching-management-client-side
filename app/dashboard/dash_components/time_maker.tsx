import React, { useState } from 'react';

const Time_maker = () => {
  const [time, setTime] = useState(' ');
  const now = new Date();

  const option = {
    weekday: 'long', // Full day name
    month: 'long', // Full month name
    day: 'numeric',
    year: 'numeric',
  } as any;

  const formatted = now.toLocaleDateString('en-US', option);

  setInterval(() => {
    let now_time = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    setTime(now_time);
  }, 1000);
  return (
    <div>
      <h2 className="text-lg">{time}</h2>
      <p className="text-[9px] text-gray-600 text-normal">{formatted}</p>
    </div>
  );
};

export default Time_maker;
