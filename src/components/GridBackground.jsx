import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

const GridBackground = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [gridPos, setGridPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  
  const GRID_SIZE = 80;
  const SQUARE_SIZE = 80;
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = Math.floor(e.clientX / GRID_SIZE) * GRID_SIZE;
      const y = Math.floor(e.clientY / GRID_SIZE) * GRID_SIZE;
      
      cursorX.set(x - (SQUARE_SIZE - GRID_SIZE) / 2);
      cursorY.set(y - (SQUARE_SIZE - GRID_SIZE) / 2);
      
      setGridPos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, GRID_SIZE, SQUARE_SIZE]);

  // Enhanced pulse animation
  useEffect(() => {
    const pulseAnimation = animate(
      cursorRef.current,
      { scale: [1, 1.2, 1] },
      { duration: 3, repeat: Infinity, ease: "easeInOut" }
    );
    return () => pulseAnimation.stop();
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none">
      {/* Grid Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(80, 80, 80, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(80, 80, 80, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`
        }}
      />
      
      {/* Expanded glowing effect */}
      <motion.div
        className="absolute pointer-events-none blur-[100px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: `${SQUARE_SIZE * 3}px`,
          height: `${SQUARE_SIZE * 3}px`,
          backgroundColor: 'rgba(255, 33, 33, 0.22)', // Deeper, more saturated red
          transform: 'translate(-33%, -33%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary glow layer */}
      <motion.div
        className="absolute pointer-events-none blur-[50px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: `${SQUARE_SIZE * 2}px`,
          height: `${SQUARE_SIZE * 2}px`,
          backgroundColor: 'rgba(255, 64, 64, 0.31)', // Stronger red
          transform: 'translate(-25%, -25%)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.33, 0.5, 0.33],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main cursor square */}
      <motion.div
        ref={cursorRef}
        className="absolute pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: `${SQUARE_SIZE}px`,
          height: `${SQUARE_SIZE}px`,
        }}
        animate={{
          boxShadow: [
            '0 0 30px rgba(255, 33, 33, 0.7)',   // Deeper red
            '0 0 60px rgba(255, 33, 33, 0.5)',
            '0 0 30px rgba(255, 33, 33, 0.7)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Inner square, no border radius, strong red gradient */}
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #FF2121 0%, #FF4C4C 50%, #FF2121 100%)',
            border: '2px solid rgba(255, 255, 255, 0.17)',
            borderRadius: '0px', // No border radius
            boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.13)'
          }}
        />
      </motion.div>

      {/* Enhanced reactive grid cells */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(
            circle at ${gridPos.x}px ${gridPos.y}px,
            rgba(255, 33, 33, 0.22) 0%,
            transparent 40%
          )`
        }}
        animate={{
          opacity: [0.85, 1, 0.85]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default GridBackground;