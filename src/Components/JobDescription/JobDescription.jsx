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
          <ul className="list-disc list-inside">
            {profile.content.map((item, idx) => (
              <li key={idx} className='py-2'>{item}</li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1>Key Projects</h1>
          <ul>
            {profile.projects.map((project, idx) => (
              <li key={idx} className='text-theme-blue py-2'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1>Skills & Languages</h1>
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category}>
              <h2 className=' text-theme-blue pt-2'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul className="flex flex-wrap">
                {skills.map((skill, idx) => (
                  <li key={idx} className="mr-2">{skill}</li>
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
