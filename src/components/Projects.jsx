import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaComment,
  FaShoppingBag,
  FaBlog,
  FaLinkedin,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12
  });

  const detailsRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Example projects, replace with your own
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Krushi-Setu",
      position: "Farmer-Consumer Marketplace",
      logo: "KS",
      description: "A platform connecting farmers directly to consumers with analytics, secure payments, and geolocation-based filtering.",
      duration: "2023",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Geolocation API"],
      color: "#5bbb7b",
      achievements: [
        "Enabled farmers to list products, accept orders, and visualize sales with dynamic charts",
        "Integrated Razorpay for secure payments and real-time order tracking",
        "Implemented geolocation filters to show products within a 50 km radius",
        "Developed AI price prediction and real-time chat/notifications"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Chart.js", "Geolocation API", "Socket.io", "JWT Auth", "TensorFlow.js"],
      image: "https://images.pexels.com/photos/5273059/pexels-photo-5273059.jpeg",
      categories: ["Full Stack", "E-Commerce"],
      codeUrl: "https://github.com/Dishang18/KrushiSetu_DishangPatel_13",
      liveUrl: "https://krushi-setu.vercel.app"
    },
    {
      id: 2,
      title: "Mindscape",
      position: "Blogging Website",
      logo: "MS",
      description: "Feature-rich blogging platform with real-time updates, commenting, and personalized recommendations.",
      duration: "2024",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      color: "#4a8cff",
      achievements: [
        "Built a blogging platform enabling real-time post updates and commenting",
        "Added engagement features like likes and push notifications",
        "Implemented recommendation system to surface personalized content",
        "Secured backend with token-based authentication and encrypted data"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Socket.io", "Redux", "Markdown Editor", "Push Notifications", "Content Recommendation"],
  image: "/p1.png",
      categories: ["Full Stack", "Content Platform"],
      codeUrl: "https://github.com/Dishang18/blog-website",
      liveUrl: "https://mindscape-25.netlify.app/"
    },
    {
      id: 3,
      title: "Chat Sphere",
      position: "Real-time Messaging App",
      logo: "CC",
      description: "Responsive messaging app with WebSockets, secure auth, and mobile-first design.",
      duration: "2022",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      color: "#ff5733",
      achievements: [
        "Built a responsive messaging app with real-time chat using WebSockets",
        "Secured sessions with JWT and bcrypt",
        "Designed mobile-first UI for cross-device accessibility",
        "Optimized MongoDB queries for fast chat retrieval"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT Auth", "bcrypt", "Responsive Design", "WebSockets", "User Presence"],
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      categories: ["Full Stack", "Real-time Communication"],
      codeUrl: "https://github.com/Dishang18/chat-app"
    },
    {
      id: 4,
      title: "Alumni Connect",
      position: "College-Alumni Networking Platform",
      logo: "AC",
      description: "A robust platform enabling colleges to manage and foster connections with their alumni. Supports multiple roles (Admin, College Admin, Student, Alumni) and features for arranging meetings, events, and ongoing engagement.",
      duration: "2025",
      location: "Web Application",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Socket.io"],
      color: "#7c3aed",
      achievements: [
        "Role-based access: Admin, College Admin, Student, Alumni",
        "Alumni directory and search",
        "Event and meeting scheduling (with RSVP)",
        "Announcement and notification system",
        "Secure authentication and user management",
        "Messaging and networking tools",
        "Analytics for engagement tracking"
      ],
      detailedTechs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Socket.io", "Email Service", "Role Management", "Event Scheduling", "Notifications"],
  image: "/alumni.png",
      categories: ["Full Stack", "Networking", "Education"],
      codeUrl: "https://github.com/Dishang18/sgp-7-Alumini-hub",
      liveUrl: "https://alumni-hub26.netlify.app/"
    }
  ], []);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(prev => (prev?.id === project.id ? null : project));
    if (detailsRef.current && selectedProject?.id !== project.id) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 140);
    }
  };

  const cardVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.46, ease: 'easeOut' }
    })
  };

  const getTechIcon = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return <FaServer className="mr-2" />;
    if (t.includes('node')) return <FaServer className="mr-2" />;
    if (t.includes('mongo')) return <FaDatabase className="mr-2" />;
    if (t.includes('socket')) return <FaComment className="mr-2" />;
    return <FaCode className="mr-2" />;
  };

  return (
    <section ref={ref} className="w-full px-4 py-12 sm:py-16 sm:px-6 md:px-8 lg:px-12 relative z-10" aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6 sm:pt-10"
      >
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-3 sm:mb-4 pt-4 sm:pt-8"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06 }}
          className="text-lg xs:text-xl sm:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2"
        >
          A showcase of my technical skills and creative problem-solving abilities
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
              style={{ willChange: 'transform, opacity' }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-800 shadow-lg transition-all duration-300 hover:border-orange-400"
              onClick={() => handleProjectClick(project)}
              aria-label={`View details for ${project.title}`}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold shadow-md"
                    style={{
                      background: project.color,
                      color: '#fff'
                    }}
                    aria-hidden="true"
                  >
                    {project.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60">{project.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/50 mb-3">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {project.duration}
                  </span>
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {project.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((cat, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-orange-500/20 text-orange-500 font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/80 mb-5 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 6 && (
                    <span className="px-3 py-1 text-xs text-white/50">+{project.techs.length - 6} more</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <div ref={detailsRef} className="h-8" />

      <AnimatePresence>
        {selectedProject && (
          <motion.article
            key={selectedProject.id}
            layout={false}
            style={{ willChange: 'transform, opacity' }}
            className="mt-6 sm:mt-8 mb-12 sm:mb-20 lg:mb-32 max-w-7xl mx-auto rounded-2xl overflow-hidden border-l-8 border-orange-500 bg-white/10 backdrop-blur-xl shadow-2xl"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            aria-labelledby={`project-title-${selectedProject.id}`}
          >
            <div className="p-6 sm:p-10">
              <header className="mb-6">
                <h2 id={`project-title-${selectedProject.id}`} className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">
                  {selectedProject.title}
                </h2>
                <h3 className="text-lg sm:text-xl text-white/80 mb-2 font-medium">
                  {selectedProject.position}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-2">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {selectedProject.duration}
                  </span>
                  <span className="flex items-center">
                    {selectedProject.id === 1 ? <FaShoppingBag className="mr-2" /> :
                      selectedProject.id === 2 ? <FaBlog className="mr-2" /> :
                        <FaComment className="mr-2" />}
                    {selectedProject.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedProject.categories.map((cat, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-orange-500/20 text-orange-500 font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
              </header>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <section aria-label="Project Overview" className="mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white flex items-center">
                      <span className="w-6 h-6 rounded-full mr-2 bg-orange-500 flex items-center justify-center">
                        <span className="text-black text-xs">ℹ️</span>
                      </span>
                      Overview
                    </h4>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </section>
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title + ' screenshot'}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover rounded-lg transition-opacity duration-700 ease-in-out"
                      style={{ willChange: 'opacity' }}
                    />
                  </div>
                  <section aria-label="Key Features" className="mb-6">
                    <h4 className="flex items-center text-lg sm:text-xl font-semibold mb-3 text-orange-500">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 bg-orange-500 flex items-center justify-center">
                        <span className="text-black text-xs sm:text-sm">🏆</span>
                      </span>
                      Key Features
                    </h4>
                    <ul className="space-y-3 sm:space-y-4 list-disc pl-5 text-white/80 text-sm sm:text-base">
                      {selectedProject.achievements.map((a, idx) => <li key={idx}>{a}</li>)}
                    </ul>
                  </section>
                  <div className="flex flex-wrap gap-4 pb-4">
                    {selectedProject.codeUrl && (
                      <a
                        href={selectedProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-orange-500 transition-colors font-semibold"
                        aria-label={`View code for ${selectedProject.title}`}
                      >
                        <FaGithub className="mr-2" /> View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-orange-500 transition-colors font-semibold"
                        aria-label={`View live demo for ${selectedProject.title}`}
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <aside className="lg:col-span-2">
                  <section aria-label="Technologies Used" className="mb-6">
                    <h4 className="flex items-center text-lg sm:text-xl font-semibold mb-3 text-white">
                      <FaCode className="mr-2 text-orange-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailedTechs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white/90 text-xs sm:text-sm rounded-lg border border-gray-700/50 flex items-center"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                  <section aria-label="Project Highlights" className="mb-6">
                    <h4 className="text-base sm:text-lg font-semibold mb-3 text-white">Project Highlights</h4>
                    <p className="text-sm sm:text-base text-white/70 italic leading-relaxed">
                      {selectedProject.id === 1 ?
                        "Krushi-Setu connects farmers with consumers, enabling secure payments and AI-driven insights." :
                        selectedProject.id === 2 ?
                          "Mindscape is a rich blogging experience with real-time updates and personalized recommendations." :
                          "Chat Connect delivers fast, secure, real-time messaging optimized for mobile."}
                    </p>
                  </section>
                  <div className="flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-lg">
                    <a href={selectedProject.codeUrl || '#'} className="text-orange-500 hover:text-orange-400" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub className="text-lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/dishang-patel-76b88b2b0/" className="text-orange-500 hover:text-orange-400" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href={selectedProject.liveUrl || '#'} className="text-orange-500 hover:text-orange-400" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;