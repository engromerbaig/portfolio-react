import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaEarthAmericas } from 'react-icons/fa6';

const iconStyles = "text-2xl aspect-square text-theme-blue motion-safe:animate-pulse";

const iconMap = {
  code: FaCode,
  users: FaUsers,
  globe: FaEarthAmericas,
};

const StatisticItem = ({ title, iconType, value }) => {
  const Icon = iconMap[iconType] || FaCode;

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-semibold'>{title}</h1>
      <div className="flex items-center justify-center gap-2">
        <Icon className={iconStyles} />
        <motion.p
          className='text-2xl font-bold'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          {value.toLocaleString()}
        </motion.p>
      </div>
    </div>
  );
};

export default StatisticItem;
