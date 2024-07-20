import React from "react";
import { FiSettings, FiUsers, FiBriefcase } from "react-icons/fi";
import "./Service.css"; // Import the CSS file for styling
import Heading from "../Heading/Heading";

const serviceData = [
  { icon: "settings", title: "Service 1", description: "Description for service 1" },
  { icon: "users", title: "Service 2", description: "Description for service 2 Description for service 2 Description for service 2 Description for service 2 Description for service 2" },
  { icon: "briefcase", title: "Service 3", description: "Description for service 3" },
];

const Service = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case "settings":
        return <FiSettings />;
      case "users":
        return <FiUsers />;
      case "briefcase":
        return <FiBriefcase />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="text-center">
        <Heading 
          title="You‘re Safe And in Good Hands" 
          text="Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service." 
        />
      </div>
      <div className="grid md:grid-cols-3 justify-center">
        {serviceData.map((service, index) => (
          <div key={index} className="mx-4 my-2">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
              <div className="text-center mb-4">
                <span className="text-4xl flex justify-center items-center mb-2">
                  {getIcon(service.icon)}
                </span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-center flex-grow">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
