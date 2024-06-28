// Tools.js
import Heading from "../Heading/Heading";
import ToolIcon from "../ToolIcon/ToolIcon";

import image1 from "../../assets/icons/reactjs.svg";

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
        <ToolIcon imgSrc={image1} text="React JS" />
        <ToolIcon imgSrc={image1} text="HTML" />
        <ToolIcon imgSrc={image1} text="CSS" />
        <ToolIcon imgSrc={image1} text="JavaScript" />
        <ToolIcon imgSrc={image1} text="GIT" />
        <ToolIcon imgSrc={image1} text="Tailwind CSS" />
        <ToolIcon imgSrc={image1} text="WordPress/Elementor" />
        <ToolIcon imgSrc={image1} text="Shoxxpify" />
        {/* Add more ToolIcon components as needed */}
      </div>

      <div className="text-center mb-8">
        <Heading 
          text="Other Technologies"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-24 py-10">
  <ToolIcon imgSrc={image1} text="Reacxt JS" />
  <ToolIcon imgSrc={image1} text="HTML" />
  <ToolIcon imgSrc={image1} text="CSS" />
  <ToolIcon imgSrc={image1} text="JavaScript" />
  <ToolIcon imgSrc={image1} text="GIT" />
  <ToolIcon imgSrc={image1} text="Tailwind CSS" />
</div>





    </div>
  );
};

export default Tools;
