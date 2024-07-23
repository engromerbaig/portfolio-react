// Service.js
import React from "react";
import "./Service.css"; // Import the CSS file for styling
import Heading from "../Heading/Heading";
import serviceData from "./serviceData"; // Ensure the import path is correct

const Service = () => {
  return (
    <div className="pt-48 pb-24 px-20 border-b-2  border-light-hover dark:border-dark-hover">
      <div className="text-center">
        <Heading 
          title="You‘re Safe And in Good Hands" 
          text="Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service." 
        />
      </div>
      <div className="grid md:grid-cols-3 justify-center text-body-text-light dark:text-body-text-dark">
        {serviceData.map((service, index) => (
          <div key={index} className="mx-4 my-2">
            <div className=" p-6  flex flex-col justify-between h-full">
              <div className="text-center mb-4">
                <span className="flex justify-center items-center mb-2">
                  <div className="text-white bg-theme-blue rounded-full">
                  <img src={service.icon} alt={service.title} className="icon-class w-14 aspect-square p-4" />

                  </div>
                
                </span>
                <h1 className="font-bold">{service.title}</h1>
              </div>
              <p className=" text-center flex-grow">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
