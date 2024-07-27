import React from 'react';

const JobDescription = ({ profile }) => {
  // Define the class name variable
  const sharedClass = "flex flex-col p-4 justify-start border-2 border-job-light dark:border-job-dark";

  return (
    <div className="p-4">
      {/* row1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {/* (1,1) */}
        <div className={` ${sharedClass}`}>
          <h1>Company Name Here</h1>
          <img src="company logo here" alt="Company Logo" />
        </div>

        {/* (1,2) */}
        <div className={` ${sharedClass}`}>
          <h1>Location</h1>
          <p>City, Country</p>
        </div>

        {/* (1,3) */}
        <div className={` ${sharedClass}`}>
          <h1>Designation</h1>
          <p>Designation Role</p>
        </div>

        {/* (1,4) */}
        <div className={`${sharedClass}`}>
          <h1>Dates</h1>
          <p>Month, Year - Month, Year</p>
        </div>

      </div>

      {/* row2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 py-4 gap-4">

        {/* (2,1) */}
        <div className={` ${sharedClass}`}>
          <h1>Job Roles</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae rerum corrupti aut ut amet inventore voluptates perferendis, magnam tempora, cumque molestiae sunt, expedita itaque iusto sequi similique eos fugit. Deserunt?</p>
        </div>

        {/* (2,2) */}
        <div className={` ${sharedClass}`}>
          <h1>Projects</h1>
          <p>My projects list</p>
        </div>

        {/* (2,3) */}
        <div className={`${sharedClass}`}>
          <h1>Languages/Skills</h1>
          <p>Programming, Vue.js, React, etc.</p>
        </div>

      </div>
    </div>
  );
};

export default JobDescription;
