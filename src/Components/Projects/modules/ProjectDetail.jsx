import React from 'react';

const ProjectDetail = ({ image,title,description, index }) => {
  // Determine layout based on index (odd/even)
  const isOdd = index % 2 !== 0;

  return (
    <div className={`flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} p-10 items-center justify-center relative`}>
      <img src={image} alt="" className={`w-1/3 aspect-square ${isOdd ? 'order-1' : 'order-2'}`} />
      {/* content container */}
      <div className={`flex w-1/2 gap-10 flex-col items-start justify-center shadow-2xl rounded-lg p-8 bg-white relative md:-ml-20 z-10 transform transition duration-700 ease-in-out origin-left hover:skew-y-0 hover:translate-x-12 ${isOdd ? 'order-2' : 'order-1'}`}>
        <h1 className="">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-row gap-10">
          <button className="bg-theme-blue p-2">live site</button>
          <button>github</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
