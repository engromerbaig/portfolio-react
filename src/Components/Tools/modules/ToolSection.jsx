
import Heading from '../../Heading/Heading';
import ToolIcon from './ToolIcon';
import AnimateWrapper from '../../../utilities/Animations/AnimateWrapper';
import { motion } from 'framer-motion';

const ToolSection = ({ title, text, tools, category }) => {
  // Flatten and filter if category is provided
  const filteredTools = category
    ? tools.find(group => group.category === category)?.tools || []
    : tools.flatMap(group => group.tools);

  return (
    <div className="text-center mb-8">
      <Heading title={title} text={text} />

      <AnimateWrapper className="grid grid-cols-2 gap-x-10 gap-y-12 place-content-center md:grid-cols-4 px-10 lg:px-24 py-10">
        {filteredTools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ToolIcon imgSrc={tool.imgSrc} text={tool.text} />
          </motion.div>
        ))}
      </AnimateWrapper>
    </div>
  );
};

export default ToolSection;
