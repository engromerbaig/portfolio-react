import React from 'react';

const JobDescription = ({ profile }) => {
  if (!profile) return <p>Select a profile to view details.</p>;

  const sharedClass = "p-4 border-2 border-job-light dark:border-job-dark";

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className={`flex flex-col h-32 ${sharedClass}`}>
          <h1 className='font-bold text-theme-blue'>
            <a href={profile.companyLink} target="_blank" rel="noopener noreferrer">
              {profile.company}
            </a>
          </h1>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1>{profile.location}</h1>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='font-bold text-theme-blue'>{profile.designation}</h1>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='text-xl'>{profile.dates}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 py-4 gap-4">
        <div className={`flex flex-col ${sharedClass}`}>
          <h1>Role Description</h1>
          <ul>
            {profile.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1>Key Projects</h1>
          <ul>
            {profile.projects.map((project, idx) => (
              <li key={idx} className='text-theme-blue'>{project}</li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1>Skills & Languages</h1>
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category}>
              <h2 className='pt-2 text-theme-blue'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul>
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
