import React from 'react';
import { theme } from '../../theme';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import omerImage from '../../assets/images/omer.jpg';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';

const Hero = () => {
  return (
    <section className={`${theme.hero.bgColor}  ${theme.sectionPaddings.horizontalPx}  py-12 font-sans`}>
      <div className="container mx-auto flex flex-col gap-6 md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start ">
          <Heading 
            title="From Pixels to Logic: Your One-Stop Dev Hub." 
            text="I design, develop, and deploy stunning web applications, turning ideas into reality seamlessly. Let's discuss your project!" 
          />

            <div className="flex flex-col items-center justify-start w-full md:flex-row gap-4">
            <FadeWrapper order={1}>

              <Button
                text="Contact Me"
                to="/contact"
                hover
              />
              </FadeWrapper>

              <FadeWrapper order={2}>

              <Button
                text="MY PROJECTS"
                href="#projects"
                hover
              />
              </FadeWrapper>

            </div>
 
        </div>
        
        {/* parent for hero image */}
        <FadeWrapper order={3}>
          <div className="w-full md:w-1/2 flex justify-center items-center my-10 lg:my-0 p-2 relative transform translate-x-[-10px] lg:translate-x-0">
            <img src={omerImage} alt="Hero" className="w-3/4 lg:w-1/2 aspect-auto shadow-hero-image" />
            <div className="absolute w-3/4 lg:w-1/2 bottom-0 lg:left-12 bg-theme-blue bg-opacity-100 p-3 shadow-lg">
              <p className="text-white text-sm">"Alone we can do so little; together we can do so much." – Helen Keller</p>
            </div>
          </div>
        </FadeWrapper>
      </div>
    </section>
  );
};

export default Hero;
