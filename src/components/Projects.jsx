import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub,FaReact, FaExternalLinkAlt, FaLinkedin, FaCalendarAlt, FaCode, FaServer, FaDatabase, FaComment, FaShoppingBag, FaMapMarkerAlt, FaBlog } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const detailsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Krushi-Setu",
      position: "Farmer-Consumer Marketplace",
      logo: "KS",
      description: "A comprehensive platform connecting farmers directly to consumers with dynamic sales analytics, secure payments, and geolocation-based product filtering.",
      duration: "2023",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Geolocation API"],
      color: "#5bbb7b", // Green for agricultural theme
      achievements: [
        "Enabled farmers to list products, accept orders, and visualize sales with dynamic chart analytics",
        "Integrated Razorpay for secure payments and real-time order tracking for consumers",
        "Implemented geolocation and pincode filters to show products within a 50 km radius",
        "Developed AI-powered price prediction and real-time chat/notification system for buyer-seller interaction"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Chart.js", "Geolocation API", "Socket.io", "JWT Auth", "TensorFlow.js"],
      image: "https://images.pexels.com/photos/5273059/pexels-photo-5273059.jpeg",
      categories: ["Full Stack", "E-Commerce"],
      codeUrl: "https://github.com/dishang/krushi-setu",
      liveUrl: "https://krushi-setu.vercel.app"
    },
    {
      id: 2,
      title: "Mindscape",
      position: "Blogging Website",
      logo: "MS",
      description: "A feature-rich blogging platform that enables users to create and manage posts with real-time updates, commenting, and personalized recommendations.",
      duration: "2024",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      color: "#4a8cff", // Blue for mindscape theme
      achievements: [
        "Created mindscape.com, a blogging platform enabling users to create and manage posts with real-time updates",
        "Introduced features like commenting, likes, and push notifications to boost engagement",
        "Devised a recommendation system to suggest personalized blogs based on user interests and activity patterns",
        "Secured backend infrastructure with token-based authentication and encrypted user data"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Socket.io", "Redux", "Markdown Editor", "Push Notifications", "Content Recommendation"],
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
      categories: ["Full Stack", "Content Platform"],
      codeUrl: "https://github.com/dishang/mindscape",
      liveUrl: "https://mindscape.vercel.app"
    },
    {
      id: 3,
      title: "Chat Connect",
      position: "Real-time Messaging App",
      logo: "CC",
      description: "A responsive real-time messaging application featuring WebSockets for instant communication, secure authentication, and mobile-first design.",
      duration: "2022",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      color: "#ff5733", // Orange for chat theme
      achievements: [
        "Constructed a responsive messaging app with real-time chat capabilities using WebSockets",
        "Applied secure authentication with JWT and bcrypt, safeguarding user sessions",
        "Designed mobile-first UI to improve user accessibility across devices",
        "Streamlined MongoDB queries for fast retrieval of chat logs and user profiles"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT Auth", "bcrypt", "Responsive Design", "WebSockets", "User Presence"],
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      categories: ["Full Stack", "Real-time Communication"],
      codeUrl: "https://github.com/dishang/chat-connect"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
    
    if (selectedProject?.id !== project.id && project) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Helper function to get appropriate icon based on technology
  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react')) return <FaReact className="mr-1" />;
    if (techLower.includes('node')) return <FaServer className="mr-1" />;
    if (techLower.includes('mongo')) return <FaDatabase className="mr-1" />;
    if (techLower.includes('socket')) return <FaComment className="mr-1" />;
    if (techLower.includes('geo')) return <FaMapMarkerAlt className="mr-1" />;
    if (techLower.includes('express')) return <FaServer className="mr-1" />;
    return <FaCode className="mr-1" />;
  };

  return (
    <section ref={ref} className="w-full px-4 py-12 sm:py-16 sm:px-6 md:px-8 lg:px-12 relative z-10 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-6 sm:pt-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-3 sm:mb-4 pt-4 sm:pt-8"
        >
          Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg xs:text-xl sm:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2"
        >
          A showcase of my technical skills and creative problem-solving abilities
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group cursor-pointer relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                ${selectedProject?.id === project.id ? 'ring-2 ring-orange-500' : 'ring-1 ring-gray-800'}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-40 xs:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2">
                  {project.categories?.map((category, index) => (
                    <span 
                      key={index}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 bg-black/70 backdrop-blur-sm text-white/90 text-xs rounded-full border border-gray-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 xs:p-5 sm:p-6 relative">
                <div className="flex items-center justify-between mb-3 sm:mb-5">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-base xs:text-lg sm:text-xl font-bold shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      {project.logo}
                    </div>
                    <div>
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm xs:text-base text-white/70 line-clamp-1">{project.position}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center text-xs sm:text-sm text-white/60 mb-3 sm:mb-4 gap-2 sm:gap-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" /> 
                    <span className="truncate max-w-[120px]">{project.duration}</span>
                  </span>
                  <span className="flex items-center">
                    {project.id === 1 ? <FaShoppingBag className="mr-1" /> : 
                     project.id === 2 ? <FaBlog className="mr-1" /> : 
                     <FaComment className="mr-1" />}
                    <span className="truncate max-w-[120px]">{project.location}</span>
                  </span>
                </div>

                {/* Project description limited to 2 lines */}
                <p className="text-white/80 text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 sm:mb-4">
                  {project.techs.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 xs:px-3 xs:py-1.5 bg-gray-800/80 text-white/80 text-xs rounded-full border border-gray-700/50 flex items-center"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="px-2 py-1 xs:px-3 xs:py-1.5 bg-gray-800/80 text-white/80 text-xs rounded-full border border-gray-700/50">
                      +{project.techs.length - 3} more
                    </span>
                  )}
                </div>

                <motion.div 
                  className="flex items-center justify-center mt-2 sm:mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-500 text-xs sm:text-sm transition-colors group-hover:bg-orange-500/20">
                    {selectedProject?.id === project.id ? 'Hide Details' : 'View Details'}
                    <motion.svg 
                      className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4"
                      animate={{ rotate: selectedProject?.id === project.id ? 180 : 0 }}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </motion.svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div ref={detailsRef} className="h-8" />

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            className="mt-6 sm:mt-8 mb-12 sm:mb-20 lg:mb-32 max-w-7xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 xs:p-6 sm:p-8 md:p-12 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-orange-500/30 rounded-xl sm:rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-1 sm:mb-2"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-6 text-white"
                  >
                    {selectedProject.position}
                  </motion.h3>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center text-white/70 mb-4 sm:mb-8 gap-4 sm:gap-6"
                  >
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center">
                      {selectedProject.id === 1 ? <FaShoppingBag className="mr-2" /> : 
                       selectedProject.id === 2 ? <FaBlog className="mr-2" /> : 
                       <FaComment className="mr-2" />}
                      <span>{selectedProject.location}</span>
                    </div>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6 sm:mb-8 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-auto object-cover rounded-lg sm:rounded-xl transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6 sm:mb-8"
                  >
                    <h4 className="flex items-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-orange-500">
                      <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3 bg-orange-500 flex items-center justify-center">
                        <span className="text-black text-xs sm:text-sm">🏆</span>
                      </span>
                      Key Features
                    </h4>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {selectedProject.achievements.map((achievement, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="mr-2 sm:mr-3 text-orange-500 mt-1">▶</div>
                          <p className="text-white/80 text-sm sm:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4 sm:gap-6 pb-4"
                  >
                    {selectedProject.codeUrl && (
                      <a 
                        href={selectedProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-orange-500 transition-colors text-base sm:text-lg group"
                      >
                        <FaGithub className="mr-2 sm:mr-3 text-base sm:text-lg group-hover:rotate-12 transition-transform" />
                        View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-orange-500 transition-colors text-base sm:text-lg group"
                      >
                        <FaExternalLinkAlt className="mr-2 sm:mr-3 text-base sm:text-lg group-hover:rotate-12 transition-transform" />
                        Live Demo
                      </a>
                    )}
                  </motion.div>
                </div>

                <div className="lg:col-span-2">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6 sm:mb-8"
                  >
                    <h4 className="flex items-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                      <FaCode className="mr-2 sm:mr-3 text-orange-500" /> 
                      Technologies Used
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailedTechs.map((tech, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white/90 text-xs sm:text-sm rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors flex items-center"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 sm:p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-lg sm:rounded-xl backdrop-blur-sm"
                  >
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Project Highlights</h4>
                    <p className="text-sm sm:text-base text-white/70 italic leading-relaxed">
                      {selectedProject.id === 1 ? 
                        "Krushi-Setu connects farmers directly with consumers, eliminating middlemen and ensuring fair prices with AI-driven recommendations." : 
                      selectedProject.id === 2 ? 
                        "Mindscape creates a unique digital space for writers and readers to connect through personalized content discovery and interactive features." : 
                        "Chat Connect provides seamless real-time communication with a focus on security, performance, and mobile accessibility."}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 sm:mt-8 flex flex-wrap gap-4"
                  >
                    <div className="flex justify-center items-center gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-lg sm:rounded-xl">
                      <a href={selectedProject.codeUrl || "#"} className="text-orange-500 hover:text-orange-400 transition-colors">
                        <FaGithub className="text-lg sm:text-xl" />
                      </a>
                      <a href="https://linkedin.com/in/dishang" className="text-orange-500 hover:text-orange-400 transition-colors">
                        <FaLinkedin className="text-lg sm:text-xl" />
                      </a>
                      <a href={selectedProject.liveUrl || "#"} className="text-orange-500 hover:text-orange-400 transition-colors">
                        <FaExternalLinkAlt className="text-lg sm:text-xl" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;