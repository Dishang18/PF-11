import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'I am Dishang Patel';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [fullText]);
  
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 overflow-hidden -mt-32">
      {/* Main Content - Moved higher up with -mt-32 (was -mt-20) */}
      <div className="relative text-center max-w-6xl mx-auto">
        {/* Animated Text Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {/* Main Title - Added whitespace-nowrap to prevent line breaks */}
          <motion.h1 
            className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white m-0 relative font-extrabold whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative z-10">{displayText}</span>
            {/* Text Glow Effect */}
            <motion.span
              className="absolute inset-0 blur-lg text-red-500/50 select-none"
              aria-hidden="true"
            >
              {fullText}
            </motion.span>
          </motion.h1>
          
          {/* Subtitle with Glow - Slightly adjusted for better spacing */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-white/80 mt-5 md:mt-6 font-medium relative mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative z-10">
              A Software developer who loves practical applications and real world problem solving.
            </span>
            {/* Subtitle Glow */}
            <motion.span
              className="absolute inset-0 blur-md text-red-500/30 select-none"
              aria-hidden="true"
            >
              A Software developer who loves practical applications and real world problem solving.
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;