import React from 'react';

const JobDescription = ({ profile }) => {
  return (
    <div className="p-20 bg-red-600">
      <h1>{profile.title}</h1>
      <p>{profile.content}</p>
      <p>MY SKILLS</p>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>LANGUAGES USED</p>
      <ul>
        {profile.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <button>Buy Now</button>
    </div>
  );
};

export default JobDescription;
