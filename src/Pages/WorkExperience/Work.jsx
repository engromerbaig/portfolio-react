import React, { useState } from 'react';
import { theme } from '../../theme';

const jobProfiles = [
  {
    title: 'Web Developer',
    content: (
      <div>
        <h2>Web Developer</h2>
        <p>Details about Web Developer role...</p>
      </div>
    ),
  },
  {
    title: 'Designer',
    content: (
      <div>
        <h2>Designer</h2>
        <p>Details about Designer role...</p>
      </div>
    ),
  },
  {
    title: 'Project Manager',
    content: (
      <div>
        <h2>Project Manager</h2>
        <p>Details about Project Manager role...</p>
      </div>
    ),
  },
];

const Work = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
<div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
    
          <div className="py-20 text-center mb-8">
        <h1 className="text-3xl font-bold">Work Experience</h1>
      </div>
      <div className="flex justify-center mb-4">
        {jobProfiles.map((profile, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2 mx-2 ${selectedTab === index ? 'bg-theme-blue text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          >
            {profile.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {jobProfiles[selectedTab].content}
      </div>
    </div>
  );
};

export default Work;
