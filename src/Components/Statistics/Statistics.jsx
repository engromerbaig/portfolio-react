import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';

// Function to initialize lines of code
const getInitialLinesOfCode = () => {
  const initialLines = 10000;
  const initialTimestamp = new Date('2023-01-01T00:00:00Z').getTime();
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - initialTimestamp;
  const increments = Math.floor(elapsedTime / (3 * 60 * 60 * 1000)); // 3 hours in milliseconds
  return initialLines + increments * 10;
};

// Function to get visitor count
const getVisitorsCount = () => {
  const storedVisitors = parseInt(localStorage.getItem('visitorsCount') || '10', 10);
  const lastReset = parseInt(localStorage.getItem('lastReset') || '0', 10);
  const now = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  if (now - lastReset > oneDay) {
    localStorage.setItem('lastReset', now.toString());
    localStorage.setItem('visitorsCount', '10'); // Explicitly set to 10
    return 10;
  } else {
    return storedVisitors;
  }
};

// Function to increment visitors count
const incrementVisitorsCount = () => {
  const storedVisitors = parseInt(localStorage.getItem('visitorsCount') || '10', 10);
  localStorage.setItem('visitorsCount', (storedVisitors + 1).toString());
};

const Statistics = () => {
  const [linesOfCode, setLinesOfCode] = useState(getInitialLinesOfCode());
  const [visitors, setVisitors] = useState(getVisitorsCount());

  useEffect(() => {
    // Increment visitors count only on initial render
    incrementVisitorsCount();
  }, [visitors]); // Dependency array checks for changes in visitors state

  useEffect(() => {
    // Update lines of code every 3 hours
    const intervalId = setInterval(() => {
      setLinesOfCode(prevLines => prevLines + 10);
    }, 3 * 60 * 60 * 1000); // 3 hours in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run only on initial render

  return (
    <div className='py-16'>
      <div className="text-center mb-8">
        <Heading
          title="My Stats"
          text="My Ever Growing Numbers"
        />
      </div>

      <div className="grid grid-col md:grid-cols-3 place-items-center">
        <div>
          <h1>Lines of Code</h1>
          <p className='text-center text-xl'>{linesOfCode}</p>
        </div>
        <div>
          <h1>Visitors Today</h1>
          <p className='text-center text-xl'>{visitors}</p>
        </div>
        <div>
          <h1>Countries Served</h1>
          <p className='text-center text-xl'>15+</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
