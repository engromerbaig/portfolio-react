import React from 'react';
import omerImage from '../../assets/images/omer2.jpg';
import Heading from '../Heading/Heading';
import SocialRow from '../Footer/modules/SocialRow';

const AboutMe = () => {
  const fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium. cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium";

  return (
    <div className="grid md:grid-cols-2 gap-10 py-24 ">
      <div className="flex justify-center p-0">
        <img src={omerImage} alt="Hero" className="w-3/4  h-full shadow-aboutme-image" />
      </div>

      <div className="flex flex-col gap-6 py-14 px-4 ">
          <p className="h-full">
          <Heading title="About Me, I'm Muhammad Omer Baig" />

            {fullText}

          </p>
          {/* social row now */}

          <SocialRow />

      </div>
    </div>
  );
};

export default AboutMe;
