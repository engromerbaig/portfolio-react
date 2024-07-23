import React, { useState, useEffect } from 'react';

const CircleTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const updatePosition = () => {
      animationFrameId = requestAnimationFrame(() => {
        updatePosition();
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: 'none', // Prevents the circle from interfering with mouse events
      }}
      className="fixed w-5 h-5 border-4 border-theme-blue rounded-full transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CircleTracker;s