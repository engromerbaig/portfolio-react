import React from 'react';
import githubIcon from '../../../assets/icons/github.svg'

const ProjectDetail = ({ image, title, description, siteLink,gitLink, index }) => {
  // Determine layout based on index (odd/even)
  const isOdd = index % 2 !== 0;

  return (
    // default case on right
    <div
      className={`flex flex-col ${
        isOdd ? 'md:flex-row-reverse' : 'md:flex-row ' // Apply justify-end for even cases
      } p-10 items-center justify-center relative`}
    >
      <img
        src={image}
        alt=""
        className={`w-1/3 aspect-square ${isOdd ? 'order-1' : ''}`} // Remove order for even cases
      />
      {/* content container */}
      <div
        className={`flex w-5/12 gap-10 flex-col items-start justify-center shadow-2xl rounded-lg p-8 bg-white relative  z-10 transform transition duration-700 ease-in-out  ${
          isOdd ? 'order-2 md:-mr-20 origin-right  hover:-translate-x-12' : 'md:-ml-20 origin-left  hover:translate-x-12'
        } // Remove order for even cases`}
      >
        <h1 className="">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-row justify-start items-center gap-4">
            
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
          
            <button className="bg-theme-blue border-none px-3 py-2 text-sm text-white rounded-sm uppercase transition-all duration-300 ease-in-out hover:outline hover:outline-3 hover:outline-gray-300">
            LIVE SITE
            </button>


          
            </a>


            <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-6 aspect-square"/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
