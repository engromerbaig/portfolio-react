import React, { useState } from 'react';
import { theme } from '../../theme';
import JobProfiles from '../../Components/JobProfiles/JobProfiles';

const Work = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize state with the first tab (0)

  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <div className="py-20 text-center mb-8">
        <h1 className="text-3xl font-bold">Work Experience</h1>
      </div>
      <JobProfiles selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default Work;
