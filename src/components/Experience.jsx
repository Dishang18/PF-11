import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "NIT Surat",
      position: "Summer Research Intern",
      logo: "NIT",
      duration: "Jun. 2024 - Jul. 2024",
      location: "Surat, Gujarat",
      description: "Conducted research on Object Detection using YOLO and CNNs, along with Depth Estimation under Dr. Chandra Prakash, DoCSE SVNIT.",
      techs: ["Python", "PyTorch", "OpenCV", "YOLO", "CNNs", "MLP", "Transformers"],
      color: "#ff5733"
    },
    {
      company: "Vaam",
      position: "AI ML Intern",
      logo: "VM",
      duration: "Jan. 2025 - May. 2024",
      location: "Surat, Gujarat",
      description: "Worked as an AI ML intern at Vaam, focusing on developing machine learning models and algorithms for various applications, specifically c...",
      techs: ["Python", "MapBox API"],
      color: "#4a8cff"
    },
    {
      company: "FashionX",
      position: "Software Developer Intern",
      logo: "FX",
      duration: "Jun. 2024 - Jul. 2024",
      location: "Surat, Gujarat",
      description: "Worked on using GANs for Virtual Tryon for clothing brands",
      techs: ["Python", "PyTorch"],
      color: "#5bbb7b"
    }
  ];

  return (
    <section className="px-4 py-24 sm:px-6 md:px-8 lg:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold text-white text-center mb-4">Experience</h2>
        <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-16">
          My professional journey building exceptional digital products
        </p>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="h-1 bg-gray-800 absolute top-4 left-0 right-0 z-0"></div>
          <div className="flex justify-between relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-orange-600"></div>
              <p className="text-white mt-2">2024</p>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <div className="w-3 h-3 rounded-full bg-gray-600 mt-2.5"></div>
              <p className="text-white mt-2">2025</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
              style={{ 
                boxShadow: `0 0 20px ${exp.color}20`,
                borderImage: `linear-gradient(45deg, ${exp.color}, transparent) 1` 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold mr-3"
                      style={{ background: exp.color }}
                    >
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-white/70">{exp.position}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-white/60 mb-4">
                  <span className="mr-4">📅 {exp.duration}</span>
                  <span>📍 {exp.location}</span>
                </div>
                
                <p className="text-white/80 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.techs.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-gray-800 text-white/80 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.techs.length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-800 text-white/80 text-xs rounded-full">
                      +{exp.techs.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;