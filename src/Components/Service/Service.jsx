// Service.js
import React from "react";
import "./Service.css"; // Import the CSS file for styling
import Heading from "../Heading/Heading";
import serviceData from "./serviceData"; // Ensure the import path is correct

const Service = () => {
  return (
    <div className="py-32 px-12">
      <div className="text-center">
        <Heading 
          title="You‘re Safe And in Good Hands" 
          text="Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service." 
        />
      </div>
      <div className="grid md:grid-cols-3 justify-center">
        {serviceData.map((service, index) => (
          <div key={index} className="mx-4 my-2">
            <div className=" p-6  flex flex-col justify-between h-full">
              <div className="text-center mb-4">
                <span className="flex justify-center items-center mb-2">
                  <img src={service.icon} alt={service.title} className="icon-class w-14 p-4 text-white bg-theme-blue rounded-full aspect-square" />
                </span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-center flex-grow">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
