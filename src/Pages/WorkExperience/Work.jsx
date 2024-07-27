import React, { useState } from 'react';
import { theme } from '../../theme';
import JobProfiles from '../../Components/JobProfiles/JobProfiles';
import Heading from '../../Components/Heading/Heading';

const Work = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize state with the first tab (0)

  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor} `}>
        <div className={`${theme.sectionPaddings.horizontalPx} py-20 text-center `}>

        <Heading title="Work Experience" text="With 3+ years of experience, I have worked for reputed companies in Pakistan and Germany, alongside freelance projects. I excel in WordPress development, front-end technologies, and UI/UX design. My work has improved website traffic, user engagement, and content management. I am adept at handling tasks both remotely and in-house, collaborating effectively with international teams." />
      </div>
      <JobProfiles selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default Work;
