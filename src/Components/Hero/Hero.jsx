import React from 'react';
import { theme } from '../../theme';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const Hero = () => {
  return (
    <section className={`${theme.hero.bgColor} py-12 font-sans`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className={"flex flex-col w-full md:w-1/2 justify-center items-start p-8"}>
          {/* Heading Component Here */}
         <Heading 
         title="Welcome to Our Website" 
         text="Discover the best solutions for your business with our expertise and commitment to excellence." 
         />



         
          <div className="flex space-x-4">
            {/* Use the Button component with default styling */}
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
        <div className="w-full md:w-1/2 p-8">
          <img src="https://via.placeholder.com/600x400" alt="Hero" className="rounded shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
