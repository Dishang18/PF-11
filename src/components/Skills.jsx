import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaPython, FaDocker } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiTypescript, SiCplusplus, SiExpress, SiFirebase, SiTensorflow, SiPostgresql, SiGit } from 'react-icons/si';
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
    { id: 'devops', name: 'DevOps', icon: '🔧' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-400" size={40} />,
      description: 'Modern JavaScript with ES6+ features, asynchronous programming, and functional concepts',
      categories: ['languages', 'frontend', 'backend']
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-blue-500" size={40} />,
      description: 'Strongly-typed JavaScript that enhances code quality and developer experience',
      categories: ['languages', 'frontend', 'backend']
    },
    {
      name: 'Python',
      icon: <FaPython className="text-blue-600" size={40} />,
      description: 'Versatile programming language used for automation, data analysis, AI, and web development',
      categories: ['languages', 'backend']
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
      name: 'C/C++',
      icon: <SiCplusplus className="text-blue-700" size={40} />,
      description: 'System programming languages used for performance-critical applications',
      categories: ['languages']
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-400" size={40} />,
      description: 'Component-based JavaScript library for building user interfaces with reusable components',
      categories: ['frontend']
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-green-600" size={40} />,
      description: 'JavaScript runtime for building scalable server-side and networking applications',
      categories: ['backend']
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="text-gray-400" size={40} />,
      description: 'Fast, unopinionated web framework for Node.js that simplifies server development',
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
      description: 'Powerful, open source object-relational database system with strong reputation for reliability',
      categories: ['databases']
    },
    {
      name: 'Firebase',
      icon: <SiFirebase className="text-yellow-500" size={40} />,
      description: 'Platform developed by Google for creating mobile and web applications',
      categories: ['backend', 'databases']
    },
    {
      name: 'Docker',
      icon: <FaDocker className="text-blue-500" size={40} />,
      description: 'Platform for developing, shipping, and running applications in containers',
      categories: ['devops']
    },
    {
      name: 'TensorFlow',
      icon: <SiTensorflow className="text-orange-500" size={40} />,
      description: 'End-to-end open source platform for machine learning and artificial intelligence',
      categories: ['languages']
    },
    {
      name: 'Git',
      icon: <SiGit className="text-red-500" size={40} />,
      description: 'Distributed version control system for tracking changes in source code during development',
      categories: ['devops']
    }
  ];

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

  return (
    <div className="relative">
      {/* Solid background overlay to hide grid */}
      <div className="absolute inset-0 bg-[#0a0e1a] z-0"></div>
      
      <section ref={ref} id="skills" className="px-4 py-16 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } }
          }}
          className="pt-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h2 
              className="text-6xl sm:text-7xl font-bold text-white mb-4 pt-8"
            >
              Technical Skills
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-white/80 max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My toolkit and expertise for building modern applications
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 rounded-lg flex items-center transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-gray-800 text-white font-medium shadow-lg shadow-black/40' 
                    : 'bg-black/40 border border-gray-800 text-white/80 hover:border-gray-700'}`}
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
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  layout
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden
                    transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="relative p-6">
                    <motion.div 
                      className="flex items-center mb-4"
                      initial={false}
                      animate={{
                        scale: hoveredSkill === skill.name ? 1.05 : 1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredSkill === skill.name ? [0, 5, -5, 0] : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-900 p-3 rounded-lg"
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white ml-4">
                        {skill.name}
                      </h3>
                    </motion.div>
                    
                    <motion.p 
                      className="text-white/70 mb-4 min-h-[60px]"
                      initial={false}
                      animate={{
                        opacity: hoveredSkill === skill.name ? 1 : 0.7
                      }}
                    >
                      {skill.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.categories.map((category, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-900 text-white/70 text-xs rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
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