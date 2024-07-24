import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Heading from '../Heading/Heading';
import StatisticItem from './modules/StatisticItem';
import { theme } from '../../theme';

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
  const [countries] = useState(15);

  useEffect(() => {
    // Increment visitors count only on initial render
    incrementVisitorsCount();
    setVisitors(getVisitorsCount()); // Update state to trigger re-render and animation
  }, []); // Empty dependency array ensures this runs once on component mount

  useEffect(() => {
    // Update lines of code every 3 hours
    const intervalId = setInterval(() => {
      setLinesOfCode(prevLines => prevLines + 10);
    }, 3 * 60 * 60 * 1000); // 3 hours in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on component mount

  // Variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const countVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div className={`pt-48 pb-24 border-b-2 border-t-2 border-light-hover dark:border-dark-hover ${theme.sectionPaddings.horizontalPx}`}>
      <div className="text-center mb-8">
        <Heading
          title="Performance Highlights"
          text="My Constantly Evolving Stats"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center px-6 gap-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Lines of Code" iconType="code" value={linesOfCode} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Visitors Today" iconType="users" value={visitors} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Countries Served" iconType="globe" value={countries} />
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
