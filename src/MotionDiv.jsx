// MotionDiv.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = ({ children, initialY = 50, delay = 0.3, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
