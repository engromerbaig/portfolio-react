import React from 'react';
import omerImage from '../../assets/images/omer2.jpg';
import Heading from '../Heading/Heading';

const AboutMe = () => {
  const fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium. cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium";

  return (
    <div className="grid md:grid-cols-2 py-16 px-16">
      <div className="flex justify-center p-2">
        <img src={omerImage} alt="Hero" className="w-full lg:w-2/5 aspect-auto shadow-aboutme-image" />
      </div>

      <div className="flex flex-col px-12">
        <Heading title="About Me, I'm Muhammad Omer Baig" />
          <p className="text-ellipsis h-full">
            {fullText}
          </p>
      </div>
    </div>
  );
};

export default AboutMe;
