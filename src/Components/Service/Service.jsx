import React from "react";
import PropTypes from "prop-types";
import { FiSettings, FiUsers, FiBriefcase } from "react-icons/fi";
import "./Service.css"; // Import the CSS file for styling

const Service = ({ icon, title, description }) => {
  const getIcon = () => {
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
    <div className="service-container md:w-1/2 lg:w-1/3 mx-4 my-2">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
        <div className="text-center mb-4">
          <span className="text-4xl flex justify-center items-center mb-2">{getIcon()}</span>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
};

Service.propTypes = {
  icon: PropTypes.oneOf(["settings", "users", "briefcase"]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Service;
