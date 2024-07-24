import React from "react";
import { motion } from "framer-motion";
import Heading from "../../Heading/Heading";
import ToolIcon from "./ToolIcon";

// Animation variants
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ToolSection = ({ title, text, tools }) => {
  return (
    <div className="text-center mb-8">
      <Heading 
        title={title}
        text={text}
      />
      
      <motion.div
        className="grid grid-cols-2 gap-x-10 gap-y-12 place-content-center md:grid-cols-4 px-10 lg:px-24 py-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {tools.map((tool, index) => (
          <motion.div key={index} variants={item}>
            <ToolIcon imgSrc={tool.imgSrc} text={tool.text} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolSection;
