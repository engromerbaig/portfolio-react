import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const defaultVariants = {
  hidden: (index) => ({
    x: index % 2 === 0 ? '100%' : '-100%', // Ensure the element is well outside the viewport
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.55, // Increase duration for smoother effect
      ease: 'linear',
      staggerChildren: 0.05, // Add a stagger effect
    },
  },
};

const SlideWrapper = React.memo(({
  children,
  variants = defaultVariants,
  initial = 'hidden',
  animate = 'visible',
  className,
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, animate, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={initial}
      animate={controls}
      custom={index}
    >
      {children}
    </motion.div>
  );
});

export default SlideWrapper;
