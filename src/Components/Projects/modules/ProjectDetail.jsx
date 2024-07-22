import React from 'react';
import placeholderImage from '../../../assets/images/placeholder.png';

const ProjectDetail = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 items-center justify-center relative">
      <img src={placeholderImage} alt="" className="w-1/3 aspect-square" />
      {/* content container */}
      <div className="flex w-1/2 gap-10 flex-col items-start justify-center shadow-2xl rounded-lg p-8 bg-white relative md:-ml-20 z-10">
        <h1 className="">heading</h1>
        <p>The owners of Zekra realized that social media isn't enough, since they aren't getting enough sales. Our web solution certainly helped them grow online.</p>
        <div className="flex flex-row gap-10">
          <button className="bg-theme-blue p-2">live site</button>
          <button>github</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
