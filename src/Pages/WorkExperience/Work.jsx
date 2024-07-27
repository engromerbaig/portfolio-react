import React, { useState } from 'react';
import { theme } from '../../theme';
import Heading from '../../Components/Heading/Heading';
import JobProfiles from '../../Components/JobProfiles/JobProfiles';

const Work = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <div className="pt-20 text-center">
        <Heading title="Work Experience" text="My Work here daskdakdacnlsdnvsvncmvx,v" />
      </div>
      <JobProfiles selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default Work;