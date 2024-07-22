import React, { useState } from 'react';
import omerImage from '../../assets/images/omer.jpg';
import Heading from '../Heading/Heading';

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium. cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium";

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="grid md:grid-cols-2 py-16 px-16">
      <div className="flex justify-center p-8">
        <img src={omerImage} alt="Hero" className="w-full lg:w-1/2 aspect-auto shadow-aboutme-image" />
      </div>

      <div className="flex flex-col px-12">
        <Heading title="About Me, I'm Muhammad Omer Baig" />
        <span>
          <p
            className={`text-ellipsis ${isExpanded ? 'h-full' : 'h-24 overflow-hidden'}`}
          >
            {fullText}
          </p>
          <button
            onClick={toggleText}
            className="text-theme-blue hover:underline"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </span>
      </div>
    </div>
  );
};

export default AboutMe;