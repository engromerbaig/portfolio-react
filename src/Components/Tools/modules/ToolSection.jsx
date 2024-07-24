import Heading from "../../Heading/Heading";
import ToolIcon from "./ToolIcon";

const ToolSection = ({ title, text, tools }) => {
  return (
    <div className="text-center mb-8">
      <Heading 
        title={title}
        text={text}
      />
      <div className="grid grid-cols-2 gap-x-10 gap-y-12 place-content-center md:grid-cols-4 px-10 lg:px-24 py-10">
        {tools.map((tool, index) => (
          <ToolIcon key={index} imgSrc={tool.imgSrc} text={tool.text} />
        ))}
      </div>
    </div>
  );
};

export default ToolSection;
