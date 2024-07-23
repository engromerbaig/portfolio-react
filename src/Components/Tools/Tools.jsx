// Tools.js
import React from "react";
import Heading from "../Heading/Heading";
import ToolIcon from "./modules/ToolIcon";
import toolData from "./modules/toolData";
import otherTechnologies from "./modules/otherTechnologies";

const Tools = () => {
  return (
    <div className="py-16 px-12">
      <div className="text-center mb-8">
        <Heading 
          title="Tools Of The Present And Future"
          text="Full-stack technologies I prefer using"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 place-content-center sm:grid-cols-4 px-24 py-10">
        {toolData.map((tool, index) => (
          <ToolIcon key={index} imgSrc={tool.imgSrc} text={tool.text} />
        ))}
      </div>

      <div className="text-center mb-8">
        <Heading 
          text="Other Technologies/Skills"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 place-content-center sm:grid-cols-4 px-24 py-10">
        {otherTechnologies.map((tech, index) => (
          <ToolIcon key={index} imgSrc={tech.imgSrc} text={tech.text} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
