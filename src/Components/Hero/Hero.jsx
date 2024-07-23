import React from 'react';
import { theme } from '../../theme';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import omerImage from '../../assets/images/omer.jpg';

const Hero = () => {
  return (
    <section className={`${theme.hero.bgColor}   py-12 font-sans`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start p-8">
          <Heading 
            title="From Pixels to Logic: Your One-Stop Dev Hub." 
            text="I design, develop, and deploy stunning web applications, turning ideas into reality seamlessly. Let's discuss your project!" 
          />
          <div className="flex space-x-4">
            <Button
              text="Contact Me"
              to="#contact"
              hover
            />
            <Button
              text="MY PROJECTS"
              href="#projects"
              hover
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-center p-8 relative">
          <img src={omerImage} alt="Hero" className="w-full md:w-3/4 lg:w-1/2 aspect-auto shadow-hero-image" />
          <div className="absolute w-3/4 md:w-1/2 bottom-4 md:left-8 bg-theme-blue bg-opacity-100 p-4 rounded shadow-lg">
            <p className="text-white ">"Alone we can do so little; together we can do so much." – Helen Keller</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
