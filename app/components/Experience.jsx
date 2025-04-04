import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  // Animation variants
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const experienceData = [
    {
      id: 1,
      company: "Torero Software",
      logo: "TS",
      role: "Frontend Developer",
      period: "May 2024 - Present",
      location: "Mumbai",
      color: "blue",
      achievements: [
        {
          title: "Frontend Architecture",
          description: "Architected and developed the entire frontend of the Retailer-one project using React.js, Tailwind CSS, and Redux.",
          skills: ["React.js", "Tailwind CSS", "Redux"]
        },
        {
          title: "Component Engineering",
          description: "Engineered reusable components and modular design patterns, significantly reducing development time.",
          skills: ["Component Design", "Modular Patterns"]
        },
        {
          title: "Performance Optimization",
          description: "Optimized data handling and state management for large datasets exceeding 100,000 records using Redux RTK.",
          skills: ["RTK Query", "Data Optimization"]
        },
        {
          title: "Responsive Design",
          description: "Led the implementation of responsive design strategies with Tailwind CSS for cross-device compatibility.",
          skills: ["Mobile-First", "Cross-Device"]
        }
      ]
    },
    {
      id: 2,
      company: "Retvens Services",
      logo: "RS",
      role: "Frontend Developer",
      period: "June 2023 - May 2024",
      location: "Mumbai",
      color: "purple",
      achievements: [
        {
          title: "React Application Development",
          description: "Built and maintained multiple React applications with complex state management using Redux and Context API.",
          skills: ["React.js", "Redux", "Context API"]
        },
        {
          title: "API Integration",
          description: "Implemented RESTful API integrations and optimized data fetching patterns using RTK Query.",
          skills: ["REST APIs", "RTK Query"]
        },
        {
          title: "UI/UX Collaboration",
          description: "Collaborated with designers to implement pixel-perfect UI components and interactive features.",
          skills: ["UI Design", "User Experience"]
        },
        {
          title: "Responsive Design",
          description: "Implemented responsive design principles ensuring applications worked seamlessly across all devices.",
          skills: ["Tailwind CSS", "Responsive Design"]
        }
      ]
    }
  ];

  const getCompanyColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-cyan-400",
      purple: "from-purple-500 to-pink-400",
      green: "from-green-500 to-emerald-400",
      orange: "from-orange-500 to-amber-400"
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="col-span-12 py-16"
    >
      <motion.div variants={fadeIn} className="mb-16 text-center">
        <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-blue-600 p-1 mb-4">
          <div className="bg-gray-900 rounded-full p-2">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Professional Journey
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          My career path and key achievements as a frontend developer
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 rounded-full hidden md:block"></div>

        {experienceData.map((exp, index) => (
          <motion.div 
            key={exp.id}
            variants={fadeIn}
            className="mb-16 last:mb-0"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Timeline Dot & Company Logo (Center on Mobile, Left/Right alternating on Desktop) */}
              <div className={`order-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-3 md:pl-12'} mb-8 md:mb-0 relative`}>
                <div className={`hidden md:block absolute ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-1/4 w-6 h-6 rounded-full bg-gradient-to-r ${getCompanyColorClasses(exp.color)} shadow-lg z-10`}></div>
                <div className="md:max-w-md ml-auto">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getCompanyColorClasses(exp.color)} shadow-lg mb-4`}>
                    <span className="text-white font-bold">{exp.period}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl font-bold text-xl text-white bg-gradient-to-br ${getCompanyColorClasses(exp.color)} shadow-lg transform hover:scale-105 transition-transform`}>
                      {exp.logo}
                    </div>
                    <div className={`${index % 2 === 0 ? 'text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-300 mt-1 justify-center md:justify-end">
                        <span>{exp.role}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline Dot */}
              <div className="order-2 md:hidden w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"></div>

              {/* Achievements (Right/Left alternating on Desktop) */}
              <div className={`order-3 md:w-1/2 ${index % 2 === 0 ? 'md:order-3 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
                <div className={`bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-xl p-1`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {exp.achievements.map((achievement, idx) => (
                      <div 
                        key={idx}
                        className="group bg-gray-700/50 rounded-2xl p-5 hover:bg-gradient-to-br hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${getCompanyColorClasses(exp.color)} bg-opacity-20`}>
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <h4 className={`font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${getCompanyColorClasses(exp.color)}`}>
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-3">
                          {achievement.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {achievement.skills.map((skill, skillIdx) => (
                            <span 
                              key={skillIdx} 
                              className={`text-xs px-2 py-1 rounded-md bg-gray-800/70 text-gray-300 hover:bg-gradient-to-r ${getCompanyColorClasses(exp.color)} hover:text-white transition-colors duration-300`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;