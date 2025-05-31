import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ name = "Dishang Patel" }) => {
  // Initialize with empty string
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Construct full text with proper spacing
  const fullText = `I am Dishang Patel`;
  
  useEffect(() => {
    let index = 0;
    // Reset text when name changes
    setDisplayText('');
    setIsTypingComplete(false);
    
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [fullText]);
  
  return (
    <section className="min-h-[85vh] sm:min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-0 md:pb-0">
      <div className="relative text-center w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {/* Main Title */}
          <motion.h1 
            className="font-signature text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white m-0 relative font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 inline-block">
              {displayText}
            
              {/* Cursor */}
              {!isTypingComplete && (
                <span className="inline-block w-[0.08em] h-[1.2em] bg-red-500 ml-1 animate-pulse align-middle"></span>
              )}
            </div>
            
            {/* Text Glow Effect - Ensure this uses the exact same text */}
            <motion.span
              className="absolute inset-0 blur-lg text-red-500/50 select-none"
              aria-hidden="true"
            >
              {displayText}
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/80 mt-4 sm:mt-5 md:mt-6 font-medium relative mx-auto max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-3xl px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative z-10 leading-relaxed">
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