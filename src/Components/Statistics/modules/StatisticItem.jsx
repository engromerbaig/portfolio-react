import React from 'react';
import { animated } from '@react-spring/web';
import { FaCode, FaUsers, FaGlobe } from "react-icons/fa6";

const iconStyles = "text-2xl aspect-square text-theme-blue";

const iconMap = {
  code: FaCode,
  users: FaUsers,
  globe: FaGlobe,
};

const StatisticItem = ({ title, iconType, value }) => {
  const Icon = iconMap[iconType] || FaCode;

  return (
    <div>
      <h1 className='font-semibold'>{title}</h1>
      <div className="flex items-center justify-center gap-2">
        <Icon className={iconStyles} />
        <animated.p className='text-2xl'>
          {value.to(n => Math.floor(n))}
        </animated.p>
      </div>
    </div>
  );
};

export default StatisticItem;
