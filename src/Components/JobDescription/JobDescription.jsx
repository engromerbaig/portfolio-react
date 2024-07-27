import React from 'react';

const JobDescription = ({ profile }) => {
  if (!profile) return <p>Select a profile to view details.</p>;

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>{profile.company}</h1>
          <p>{profile.location}</p>
        </div>

        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>Title</h1>
          <p>{profile.title}</p>
        </div>

        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>Designation</h1>
          <p>{profile.designation}</p>
        </div>

        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>Dates</h1>
          <p>{profile.dates}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 py-4 gap-4">
        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>Role Description</h1>
          <p>{profile.content}</p>
        </div>

        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>Key Projects</h1>
          <ul>
            {profile.projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col p-4 border-2 border-job-light dark:border-job-dark">
          <h1>Skills & Languages</h1>
          <h2>Skills</h2>
          <ul>
            {profile.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <h2>Languages</h2>
          <ul>
            {profile.languages.map((language, idx) => (
              <li key={idx}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
