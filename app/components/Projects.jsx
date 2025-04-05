import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  // Animation variants
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      name: "One Nation One Code (ONOC)",
      description:
        "A comprehensive platform built for retailers to manage inventory, sales, and customer data with real-time analytics.",
      image: "https://i.ibb.co/WWnxsRCT/Screenshot-2025-04-04-123724.png",
      tags: ["React.js", "Redux", "Tailwind CSS", "RTK Query"],
      //   githubUrl: "https://github.com/username/retailer-one",
      demoUrl: "https://www.liveapp.in",
      status: "completed",
    },
    {
      id: 2,
      name: "Jojo Cart",
      description:
        "Jojo Cart is a full-fledged e-commerce platform designed specifically for cakes and gifts businesses.",
      image: "https://i.ibb.co/TM3NJHrq/Screenshot-2025-04-04-131651.png",
      tags: [
        "React.js",
        "NodeJS",
        "Express",
        "AWS",
        "Redux",
        "Tailwind CSS",
        "RTK Query",
      ],
      githubUrl: "https://github.com/Pranay9752/kingbaker",
      demoUrl: "https://jojocart.com",
      status: "working",
    },
    {
      id: 3,
      name: "Taskifyr",
      description:
        "Taskifyr is a project management tool designed to streamline teamwork and boost productivity. With an intuitive interface, it enables teams to collaborate efficiently.",
      // image: "/api/placeholder/600/400",
      tags: ["React.js", "Redux", "Tailwind CSS"],
      githubUrl: "https://github.com/Pranay9752/taskifyr",
      status: "deprecated",
    },
  ];

  // Function to get status badge style
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/40 text-green-800 border border-green-500/30";
      case "working":
        return "bg-blue-500/40 text-blue-800 border border-blue-500/30";
      case "deprecated":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
      default:
        return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
    }
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="col-span-12 py-16"
    >
      <motion.div variants={fadeIn} className="mb-12 text-center">
        <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-4">
          <div className="bg-gray-900 rounded-full p-2">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Projects
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Check out some of my recent work and ongoing projects
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${getStatusBadgeStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                {project.image && <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>}
              </div>

              <div className="p-6 relative z-10 flex justify-between flex-col h-[300px] ">
          
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-300 mt-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700/70 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-between items-center">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="ml-2 text-sm">GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center ml-auto text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-500/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
