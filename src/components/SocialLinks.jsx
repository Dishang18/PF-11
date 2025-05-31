import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { BsFillBriefcaseFill, BsBarChartFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/Dishang18", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dishang-patel-76b88b2b0", label: "LinkedIn" },
    { icon: <FaDownload />, url: "/Dishang_Patel_Resume.pdf", label: "Resume", openNewTab: true },
    { icon: <FaEnvelope />, url: "mailto:dishangpatelce.26@gmail.com", label: "Email" },
    { icon: <BsFillBriefcaseFill />, url: "/portfolio", label: "Projects" },
    { icon: <BsBarChartFill />, url: "/stats", label: "Stats" },
  ];
  
  // Function to handle clicks for debugging
  const handleLinkClick = (e, url) => {
    console.log(`Clicked: ${url}`);
    // For non-external links, prevent default and handle manually if needed
    if (!url.startsWith('http') && !url.startsWith('mailto') && !url.includes('.pdf')) {
      e.preventDefault();
      console.log(`Would navigate to: ${url}`);
      // You could add navigation logic here
    }
  };

  return (
    <motion.div 
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 bg-black/50 py-4 px-8 rounded-full backdrop-blur-sm z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ pointerEvents: 'auto' }} // Ensure clicks work
    >
      {links.map((link, index) => (
        <motion.div
          key={index}
          className="relative group"
          whileHover="hover"
        >
          <motion.a
            href={link.url}
            className="text-white/80 hover:text-white text-2xl transition-colors relative z-10 block p-2" // Added padding for larger click area
            variants={{
              hover: { 
                scale: 1.2,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }
            }}
            target={link.url.startsWith('http') || link.openNewTab ? '_blank' : '_self'}
            rel={link.url.startsWith('http') || link.openNewTab ? "noopener noreferrer" : ""}
            onClick={(e) => handleLinkClick(e, link.url)}
          >
            {link.icon}
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-red-500/20 blur-lg rounded-full"
              variants={{
                hover: {
                  scale: 1.4,
                  opacity: 0.8
                }
              }}
              initial={{ opacity: 0, scale: 1 }}
            />
          </motion.a>

          {/* Label popup */}
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap z-50"
            variants={{
              hover: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }
            }}
            initial={{ opacity: 0, y: 10 }}
          >
            {link.label}
            {/* Arrow */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;