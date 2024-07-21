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
            title="Welcome to Our Website" 
            text="Discover the best solutions for your business with our expertise and commitment to excellence." 
          />
          <div className="flex space-x-4">
            <Button
              text="Get Started"
              to="#contact"
              hover
            />
            <Button
              text="Learn Here"
              href="#content"
              hover
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-center p-8 relative">
          <img src={omerImage} alt="Hero" className="w-full md:w-3/4 lg:w-1/2 aspect-auto shadow-hero-image" />
          <div className="absolute w-3/4 md:w-1/2 bottom-4 md:left-8 bg-red-600 bg-opacity-100 p-4 rounded shadow-lg">
            <p className="text-white italic">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
