import React from 'react';
import { motion } from 'framer-motion';

// Default animation variants
const defaultContainerVariants = {
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

const defaultItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const AnimateWrapper = ({
  children,
  containerVariants = defaultContainerVariants,
  initial = "hidden",
  animate = "visible",
  itemVariants = defaultItemVariants,
  className
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial={initial}
      animate={animate}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { variants: itemVariants })
      )}
    </motion.div>
  );
};

export default AnimateWrapper;
