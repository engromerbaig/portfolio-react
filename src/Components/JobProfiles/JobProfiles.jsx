import React from 'react';
import { jobProfiles } from './modules/jobProfiles';
import JobDescription from '../JobDescription/JobDescription';

const JobProfiles = ({ selectedTab, setSelectedTab }) => {
  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex justify-center mb-4">
        {jobProfiles.map((profile, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2  mx-2 ${selectedTab === index ? 'bg-theme-blue text-white' : 'bg-light-hover dark:bg-dark-hover text-body-text-light dark:text-body-text-dark'}`}
          >
            {profile.company}
          </button>
        ))}
      </div>

      {/* Job Description */}
      <div className="py-4 px-10">
        <JobDescription profile={jobProfiles[selectedTab]} />
      </div>
    </div>
  );
};

export default JobProfiles;
