import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaReact, FaNodeJs, FaServer, FaDatabase, FaGithub } from 'react-icons/fa';

const Internships = () => {
  const internships = [
    {
      id: 1,
      title: "Izonnet Web Solutions",
      position: "MERN Stack Intern",
      logo: "IZ",
      description: "Engineered and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Collaborated with a team of 4 to build scalable and efficient web solutions. Integrated RESTful APIs to handle user input, database queries, and response delivery more efficiently. Utilized JWT and session-based authentication to manage user state securely.",
      duration: "May 2024 - Jun 2024",
      location: "Navsari, Gujarat",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful API", "JWT Auth"],
      color: "#8e44ad", // Purple for web solutions
      categories: ["Web Development", "Full Stack"],
      github: "github.com/Dishang18"
    }
  ];

  // Helper function to get appropriate icon based on skill
  const getSkillIcon = (skill) => {
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('react')) return <FaReact className="mr-1 text-blue-400" />;
    if (skillLower.includes('node')) return <FaNodeJs className="mr-1 text-green-500" />;
    if (skillLower.includes('express')) return <FaServer className="mr-1 text-gray-400" />;
    if (skillLower.includes('mongo')) return <FaDatabase className="mr-1 text-green-400" />;
    if (skillLower.includes('jwt')) return <FaServer className="mr-1 text-yellow-500" />;
    if (skillLower.includes('rest')) return <FaServer className="mr-1 text-blue-300" />;
    return null;
  };

  // Current date for the component
  const currentDate = "2025-05-31 08:26:00";
  const currentUser = "Dishang18";

  return (
    <div className="relative w-full bg-[#0a0e1a]">
      {/* Full-width background that extends beyond section boundaries */}
      <div className="absolute inset-0 bg-[#0a0e1a] z-0 min-h-full"></div>
      
      <section id="internships" className="px-4 py-12 sm:py-16 md:py-20 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-6 sm:pt-10"
        >
          <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-3 sm:mb-4 pt-4 sm:pt-8">
            Experience
          </h2>
          <p className="text-lg xs:text-xl sm:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2">
            My professional journey building exceptional digital products
          </p>
          
          {/* Single Card Layout Centered */}
          <div className="max-w-3xl mx-auto">
            {internships.map((internship) => (
              <div key={internship.id} className="flex flex-col">
                {/* Categories at top */}
                <div className="mb-2 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  {internship.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-800/70 text-white/90 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex-grow bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 overflow-hidden"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <div className="p-5 sm:p-6 md:p-8">
                    {/* Logo + Title */}
                    <div className="flex items-start mb-4 sm:mb-5">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mr-4 sm:mr-5"
                        style={{ background: internship.color }}
                      >
                        {internship.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{internship.title}</h3>
                        <p className="text-base sm:text-lg text-white/70">{internship.position}</p>
                        
                        <div className="flex items-center text-xs sm:text-sm text-white/60 mt-2">
                          <FaGithub className="mr-1.5" />
                          <a 
                            href={`https://${internship.github}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            {internship.github}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Duration + Location */}
                    <div className="flex flex-wrap items-center text-sm sm:text-base text-white/60 mb-4 sm:mb-5 gap-y-2 gap-x-6">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-sm sm:text-base" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-sm sm:text-base" />
                        <span>{internship.location}</span>
                      </div>
                    </div>

                    {/* Description - expanded with bullets */}
                    <div className="text-white/80 mb-6 sm:mb-8 space-y-3">
                      <p className="text-base sm:text-lg font-medium">Key Responsibilities:</p>
                      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>Engineered and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
                        <li>Collaborated with a team of 4 to build scalable and efficient web solutions.</li>
                        <li>Integrated RESTful APIs to handle user input, database queries, and response delivery more efficiently.</li>
                        <li>Utilized JWT and session-based authentication to manage user state securely.</li>
                      </ul>
                    </div>
                    
                    {/* Skills with icons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {internship.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 bg-gray-800 text-white/80 text-sm rounded-full flex items-center"
                        >
                          {getSkillIcon(skill)}
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Last update info */}
                    <div className="mt-6 pt-4 border-t border-gray-800/50 text-xs text-gray-500 flex justify-between items-center">
                      <span>Last updated: {currentDate}</span>
                      <span>@{currentUser}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Internships;