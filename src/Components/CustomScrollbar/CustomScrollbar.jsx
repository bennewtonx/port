import React from 'react'
import { motion, useScroll } from 'framer-motion';
  
  function CustomScrollbar({ scrollYProgress }) {
    return (
        <motion.div
        className='custom-scrollbar'
        style={{
          scaleY: scrollYProgress, // Use scaleY to adjust the height
        }}
      ></motion.div>
      
      )
  }
  
  export default CustomScrollbar