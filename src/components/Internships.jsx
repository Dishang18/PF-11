import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Internships = () => {
  const internships = [
    {
      id: 1,
      title: "NIT Surat",
      position: "Summer Research Intern",
      logo: "NIT",
      description: "Conducted research on Object Detection using YOLO and CNNs, along with Depth Estimation under Dr. Chandra Prakash, DoCSE SVNIT.",
      duration: "Jun. 2024 - Jul. 2024",
      location: "Surat, Gujarat",
      skills: ["Python", "PyTorch", "OpenCV", "YOLO", "CNNs"],
      color: "#4a8cff",
      categories: ["Machine Learning", "Computer Vision"]
    },
    {
      id: 2,
      title: "Vaam",
      position: "AI ML Intern",
      logo: "VM",
      description: "Worked as an AI ML Intern at Vaam, focusing on developing machine learning models and algorithms for various applications.",
      duration: "Jan. 2025 - May. 2024",
      location: "Surat, Gujarat",
      skills: ["Python", "MapBox API", "Machine Learning"],
      color: "#ff5733",
      categories: ["Machine Learning", "API Integration"]
    },
    {
      id: 3,
      title: "FashionX",
      position: "Software Developer Intern",
      logo: "FX",
      description: "Worked on using GANs for Virtual Tryon for clothing brands.",
      duration: "Jun. 2024 - Jul. 2024",
      location: "Surat, Gujarat",
      skills: ["Python", "PyTorch", "GANs"],
      color: "#5bbb7b",
      categories: ["Machine Learning", "Web Development"]
    }
  ];

  return (
    <section id="internships" className="px-4 py-16 sm:px-6 md:px-8 lg:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-10"
      >
        <h2 className="text-6xl sm:text-7xl font-bold text-white text-center mb-4 pt-8">
          Internships
        </h2>
        <p className="text-2xl text-white/80 text-center max-w-3xl mx-auto mb-16">
          Professional experience that has shaped my technical expertise
        </p>
        
        {/* Horizontal Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {internships.map((internship) => (
            <div key={internship.id} className="flex flex-col">
              {/* Categories at top */}
              <div className="mb-4 flex flex-wrap gap-2">
                {internship.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800/70 text-white/90 text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: internship.id * 0.2 }}
                className="flex-grow bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <div className="p-6">
                  {/* Logo + Title */}
                  <div className="flex items-start mb-4">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold mr-4"
                      style={{ background: internship.color }}
                    >
                      {internship.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{internship.title}</h3>
                      <p className="text-white/70">{internship.position}</p>
                    </div>
                  </div>

                  {/* Duration + Location */}
                  <div className="flex items-center text-sm text-white/60 mb-4">
                    <div className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-2" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6">
                    {internship.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {internship.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-800 text-white/80 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {internship.skills.length > 5 && (
                      <span className="px-3 py-1.5 bg-gray-800 text-white/80 text-sm rounded-full">
                        +{internship.skills.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Internships;