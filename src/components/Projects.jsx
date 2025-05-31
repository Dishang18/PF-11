import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const detailsRef = useRef(null);
  const borderColor = "#ff5733";

  const projects = [
    {
      id: 1,
      title: "NIT Surat",
      position: "Summer Research Intern",
      logo: "NIT",
      description: "Conducted research on Object Detection using YOLO and CNNs, along with Depth Estimation under Dr. Chandra Prakash, DoCSE SVNIT.",
      duration: "Jun. 2024 - Jul. 2024",
      location: "Surat, Gujarat",
      techs: ["Python", "PyTorch", "OpenCV", "YOLO", "CNNs", "MLP", "Transformers"],
      color: "#4a8cff",
      achievements: [
        "Implemented YOLO object detection with 92% accuracy on custom dataset",
        "Developed depth estimation algorithm using CNNs that outperformed benchmark by 15%",
        "Published research findings in departmental journal"
      ],
      detailedTechs: ["Python", "PyTorch", "OpenCV", "YOLO", "CNNs", "MLP", "Transformers"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      categories: ["Machine Learning", "Computer Vision"]
    },
    {
      id: 2,
      title: "Vaam",
      position: "AI ML Intern",
      logo: "VM",
      description: "Worked as an AI ML Intern at Vaam, focusing on developing machine learning models and algorithms for various applications, specifically cab fare estimation algorithms.",
      duration: "Jan. 2025 - May. 2024",
      location: "Surat, Gujarat",
      techs: ["Python", "MapBox API", "Machine Learning"],
      color: "#ff5733",
      achievements: [
        "Developed a cab fare estimation algorithm using MapBox API",
        "Collaborated with the team to implement machine learning models for real-time applications",
        "Gained hands-on experience in data preprocessing techniques"
      ],
      detailedTechs: ["Python", "MapBox API", "Machine Learning", "TensorFlow", "Data Preprocessing", "Algorithm Design"],
      image: "https://images.pexels.com/photos/7014926/pexels-photo-7014926.jpeg",
      categories: ["Machine Learning", "API Integration"],
      liveUrl: "https://vaam.io"
    },
    {
      id: 3,
      title: "FashionX",
      position: "Software Developer Intern",
      logo: "FX",
      description: "Worked on using GANs for Virtual Tryon for clothing brands",
      duration: "Jun. 2024 - Jul. 2024",
      location: "Surat, Gujarat",
      techs: ["Python", "PyTorch", "GANs"],
      color: "#5bbb7b",
      achievements: [
        "Built a virtual try-on system using GANs with 85% accuracy",
        "Reduced rendering time by 40% through optimization techniques",
        "Integrated the solution with the company's e-commerce platform"
      ],
      detailedTechs: ["Python", "PyTorch", "GANs", "React", "TensorFlow.js", "Image Processing"],
      image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg",
      categories: ["Machine Learning", "Web Development"],
      codeUrl: "https://github.com/dishang/fashionx"
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

  return (
    <section ref={ref} className="px-4 py-16 sm:px-6 md:px-8 lg:px-12 relative z-10 mt-8 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 text-center mb-4 pt-8"
        >
          Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-white/80 text-center max-w-3xl mx-auto mb-16"
        >
          A showcase of my technical skills and creative problem-solving abilities
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                ${selectedProject?.id === project.id ? 'ring-2 ring-orange-500' : 'ring-1 ring-gray-800'}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.categories?.map((category, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white/90 text-xs rounded-full border border-gray-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center text-xl font-bold mr-4 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      {project.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70">{project.position}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-white/60 mb-4 space-x-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" /> {project.duration}
                  </span>
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" /> {project.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-gray-800/80 text-white/80 text-sm rounded-full border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="px-3 py-1.5 bg-gray-800/80 text-white/80 text-sm rounded-full border border-gray-700/50">
                      +{project.techs.length - 3} more
                    </span>
                  )}
                </div>

                <motion.div 
                  className="flex items-center justify-center mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-500 text-sm transition-colors group-hover:bg-orange-500/20">
                    {selectedProject?.id === project.id ? 'Hide Details' : 'View Details'}
                    <motion.svg 
                      className="ml-2"
                      animate={{ rotate: selectedProject?.id === project.id ? 180 : 0 }}
                      width="16" 
                      height="16" 
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
            className="mt-8 mb-32 max-w-7xl mx-auto rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-orange-500/30 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2"
                  >
                    {selectedProject.position}
                  </motion.h2>
                  
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-medium mb-6 text-white"
                  >
                    {selectedProject.title}
                  </motion.h3>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center text-white/70 mb-8 space-x-6"
                  >
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-white/80 mb-8"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h4 className="flex items-center text-xl font-semibold mb-6 text-orange-500">
                      <span className="inline-block w-8 h-8 rounded-full mr-3 bg-orange-500 flex items-center justify-center">
                        <span className="text-black text-sm">🏆</span>
                      </span>
                      Key Achievements
                    </h4>
                    
                    <div className="space-y-4">
                      {selectedProject.achievements.map((achievement, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="mr-3 text-orange-500 mt-1">▶</div>
                          <p className="text-white/80">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex space-x-6 pb-4"
                  >
                    {selectedProject.codeUrl && (
                      <a 
                        href={selectedProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-orange-500 transition-colors text-lg group"
                      >
                        <FaGithub className="mr-3 text-lg group-hover:rotate-12 transition-transform" />
                        View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-orange-500 transition-colors text-lg group"
                      >
                        <FaExternalLinkAlt className="mr-3 text-lg group-hover:rotate-12 transition-transform" />
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
                    className="mb-8"
                  >
                    <h4 className="flex items-center text-xl font-semibold mb-6 text-white">
                      <FaCode className="mr-3 text-orange-500" /> 
                      Technologies Used
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailedTechs.map((tech, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white/90 text-sm rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl backdrop-blur-sm"
                  >
                    <h4 className="text-lg font-semibold mb-4 text-white">About This Project</h4>
                    <p className="text-white/70 italic leading-relaxed">
                      "{selectedProject.description}"
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <div className="flex justify-center items-center gap-4 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-xl">
                      <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                        <FaGithub className="text-xl" />
                      </a>
                      <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                        <FaExternalLinkAlt className="text-xl" />
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