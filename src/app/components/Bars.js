"use client"
import React, { useState, useEffect } from 'react';

const Bars = ({ numBars }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDurations, setAnimationDurations] = useState([]);
  useEffect(() => {
    if (isAnimating) {
      const durations = Array.from({ length: numBars }, () => getRandomDuration());
      setAnimationDurations(durations);
    }
  }, [isAnimating, numBars]);

  const getRandomDuration = () => {
    return `${(Math.random() * 1.5 + 0.5).toFixed(2)}s`;
  };

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className=''>
      <button
        className=" flex items-center justify-center bg-transparent hover:text-gray-800 focus:outline-none"
        onClick={handleClick}
      >
        {Array.from({ length: numBars }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-[2px] bg-slate-900  mx-[1px] ${isAnimating ? 'music-bars-animate' : ''
              }`}
            style={{ animationDuration: isAnimating ? animationDurations[index] : '0s' }}
          ></div>
        ))}
      </button>
    </div>
  );
};

export default Bars;

