import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaBootstrap, FaDocker, FaPython } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiCplusplus, SiExpress, SiFirebase, SiPostgresql, SiGit, SiC, SiMysql, SiTailwindcss, SiPostman, SiTypescript } from 'react-icons/si';
import { BsStack, BsWindowDesktop } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const categories = [
    { id: 'all', name: 'All Skills', icon: '⚡' },
    { id: 'languages', name: 'Languages', icon: '</>' },
    { id: 'frontend', name: 'Frontend', icon: '🖥️' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'databases', name: 'Databases', icon: '🗄️' },
    { id: 'devops', name: 'DevOps', icon: '🔧' },
    { id: 'core', name: 'Core CS', icon: '🧠' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // ...existing code...
  const skills = [
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-400" size={40} />,
      description: 'Modern JavaScript with ES6+ features, asynchronous programming, and DOM manipulation',
      categories: ['languages', 'frontend', 'backend']
    },
    {
      name: 'Java',
      icon: <FaJava className="text-red-500" size={40} />,
      description: 'Object-oriented programming language for building robust, platform-independent applications',
      categories: ['languages', 'backend']
    },
    {
      name: 'C',
      icon: <SiC className="text-blue-500" size={40} />,
      description: 'Low-level programming language providing fine control over memory and hardware resources',
      categories: ['languages']
    },
    {
      name: 'C++',
      icon: <SiCplusplus className="text-blue-700" size={40} />,
      description: 'Powerful object-oriented language used for system/application development and competitive programming',
      categories: ['languages']
    },
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-red-500" size={40} />,
      description: 'Semantic markup language that forms the foundation of web content structure',
      categories: ['frontend']
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-blue-400" size={40} />,
      description: 'Styling language used to create visually appealing and responsive web interfaces',
      categories: ['frontend']
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-400" size={40} />,
      description: 'Component-based JavaScript library for building interactive and reusable UI components',
      categories: ['frontend']
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap className="text-purple-500" size={40} />,
      description: 'Front-end framework for designing responsive and mobile-first websites quickly',
      categories: ['frontend']
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-teal-400" size={40} />,
      description: 'Utility-first CSS framework for creating custom designs without leaving your HTML',
      categories: ['frontend']
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-green-600" size={40} />,
      description: 'JavaScript runtime for building scalable server-side applications and APIs',
      categories: ['backend']
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="text-gray-400" size={40} />,
      description: 'Fast, unopinionated web framework for Node.js that simplifies API and server development',
      categories: ['backend']
    },
    {
      name: 'MongoDB',
      icon: <DiMongodb className="text-green-500" size={40} />,
      description: 'NoSQL database that provides high performance, high availability, and easy scalability',
      categories: ['databases']
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="text-blue-500" size={40} />,
      description: 'Powerful object-relational database with robust features and reliability',
      categories: ['databases']
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="text-blue-600" size={40} />,
      description: 'Popular relational database management system for web applications and data storage',
      categories: ['databases']
    },
    {
      name: 'Docker',
      icon: <FaDocker className="text-blue-500" size={40} />,
      description: 'Platform for developing, shipping, and running applications in containers',
      categories: ['devops']
    },
    {
      name: 'Git',
      icon: <SiGit className="text-red-500" size={40} />,
      description: 'Distributed version control system for tracking changes in source code during development',
      categories: ['devops']
    },
    {
      name: 'Postman',
      icon: <SiPostman className="text-orange-500" size={40} />,
      description: 'API platform for building and using APIs with features for testing and documentation',
      categories: ['devops', 'backend']
    }
  ];
//

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.categories.includes(activeCategory));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  // Safe alternative to window.innerWidth for SSR
  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 30 : 40;
    }
    return 40; // Default size for SSR
  };

  return (
    <div className="relative">
      {/* Solid background overlay to hide grid */}
      <div className="absolute inset-0 bg-[#0a0e1a] z-0"></div>
      
      {/* Dot grid background pattern (optional) */}
      <div className="absolute inset-0 bg-[#0a0e1a] bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] z-0 opacity-30"></div>
      
      <section ref={ref} id="skills" className="px-4 py-12 sm:py-16 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } }
          }}
          className="pt-6 sm:pt-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 pt-4 sm:pt-8"
            >
              Technical Skills
            </motion.h2>
            
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My toolkit and expertise for building modern applications
            </motion.p>
          </motion.div>

          {/* Categories - styled to match reference image */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <motion.div 
              className="flex gap-2 sm:gap-3 mb-2 sm:justify-center overflow-auto pb-2 sm:pb-0 sm:overflow-visible scrollbar-hide sm:flex-wrap"
              variants={containerVariants}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg flex-shrink-0 flex items-center transition-all duration-300
                    ${activeCategory === category.id 
                      ? 'bg-[#ff4500] text-white font-medium shadow-lg shadow-[#ff4500]/20' 
                      : 'bg-[#1a1a1a]/80 text-white/80 hover:bg-[#252525]'}`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }
                  }}
                >
                  <span className="mr-1.5 sm:mr-2 text-base sm:text-lg">{category.icon}</span>
                  <span className="text-sm sm:text-base whitespace-nowrap">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
            {/* Scroll indicators for mobile */}
            <div className="flex justify-between absolute -left-2 -right-2 top-1/2 transform -translate-y-1/2 pointer-events-none sm:hidden">
              <div className="w-6 h-10 bg-gradient-to-r from-[#0a0e1a] to-transparent"></div>
              <div className="w-6 h-10 bg-gradient-to-l from-[#0a0e1a] to-transparent"></div>
            </div>
          </div>

          {/* Skills grid - enhanced with hover effects to match reference image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  layout
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative bg-black/30 rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(17, 17, 17, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(30, 30, 30, 0.7)',
                  }}
                  whileHover={{
                    boxShadow: hoveredSkill === skill.name ? 
                      '0 0 0 1px rgba(255, 69, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5)' : 
                      '0 4px 20px rgba(0, 0, 0, 0.2)',
                    borderColor: hoveredSkill === skill.name ? 'rgba(255, 69, 0, 0.5)' : 'rgba(30, 30, 30, 0.7)',
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Dot pattern background (like in reference) */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px] z-0"></div>
                  
                  <div className="relative p-5 z-10">
                    <div className="flex items-center mb-3">
                      <div className="p-3 rounded-md mr-3" style={{background: 'rgba(20, 20, 20, 0.8)'}}>
                        {React.cloneElement(skill.icon, { size: getIconSize() })}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {skill.name}
                      </h3>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {skill.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {skill.categories.map((category, idx) => (
                        <span 
                          key={idx}
                          className={`px-2 py-0.5 text-xs rounded-full transition-colors duration-300
                            ${category === activeCategory || activeCategory === 'all' 
                              ? 'bg-[#ff4500]/20 text-[#ff4500]' 
                              : 'bg-[#222]/80 text-white/60'}`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4500]/0 via-[#ff4500] to-[#ff4500]/0"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;