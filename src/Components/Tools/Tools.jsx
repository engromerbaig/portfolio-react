// Tools.js
import React from "react";
import Heading from "../Heading/Heading";
import ToolIcon from "./modules/ToolIcon";
import toolData from "./modules/toolData";
import otherTechnologies from "./modules/otherTechnologies";

const Tools = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <Heading 
          title="Tools"
          text="Tools of present and future"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 place-content-center sm:grid-cols-4 px-24 py-10">
        {toolData.map((tool, index) => (
          <ToolIcon key={index} imgSrc={tool.imgSrc} text={tool.text} />
        ))}
      </div>

      <div className="text-center mb-8">
        <Heading 
          text="Other Technologies"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-24 px-24 py-10">
        {otherTechnologies.map((tech, index) => (
          <ToolIcon key={index} imgSrc={tech.imgSrc} text={tech.text} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
