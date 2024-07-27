import React from 'react';

const JobDescription = ({ profile }) => {
  return (
    <div className="p-4">
        {/* row1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* (1,1) */}
        <div className="flex flex-col border-2  border-job-light dark:border-job-dark ">
        <h1>company name heres</h1>
        <img src="company logo here" alt="" />
        </div>

           {/* (1,1) */}
           <div className="flex flex-col border-2">
        <h1>Location</h1>
        <p>city, country</p>
       </div>

       <div className="flex flex-col border-2">
        <h1>Designation</h1>
        <p>designation role</p>
       </div>


       <div className="flex flex-col border-2">
        <h1>Dates</h1>
        <p>month,year - month, year</p>
       </div>





        </div>

        {/* row2 */}
        <div className="grid grid-cols lg:grid-cols-3 py-4 gap-4">

        <div className="flex flex-col border-2">
        <h1>Job Roles</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae rerum corrupti aut ut amet inventore voluptates perferendis, magnam tempora, cumque molestiae sunt, expedita itaque iusto sequi similique eos fugit. Deserunt?</p>
       </div>

       <div className="flex flex-col border-2">
        <h1>Projects</h1>
        <p>my projects list</p>
       </div>

       <div className="flex flex-col border-2">
        <h1>Lanuages/Skills</h1>
        <p>progamming vue js etc react</p>
       </div>


        </div>

    </div>
  );
};

export default JobDescription;
