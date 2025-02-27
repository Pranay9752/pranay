"use client";
import Head from "next/head";

import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = {
  "React.js": (
    <svg className="size-16 text-[#61DAFB]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>React</title>
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div variants={fadeIn} className="md:col-span-8 space-y-3">
            <div className="flex items-center mb-2">
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mr-4">
                Pranay Ambre
              </h1>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                Available for hire
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-medium">
              Frontend Developer
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Building exceptional digital experiences with React.js, Next.js,
              and Redux. Focused on scalable architecture, responsive design,
              and optimized performance.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Contact Me
              </a>
              <a
                href="#skills"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                View Skills
              </a>
              <a
                href="#experience"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                See Experience
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="md:col-span-4 bg-gray-800 p-6 rounded-2xl shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Phone</p>
                  <p className="text-sm">+91 8788 373 686</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-sm">pranayambre01@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-sm">Mumbai, India</p>
                </div>
              </div>

              <div className="pt-2 flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col gap-16">
          {/* skills */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="py-16 px-6 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-green-400 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {[
                "React.js",
                "Next.js",
                "Redux",
                "RTK Query",
                "REST APIs",
                "JavaScript ES6+",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Responsive Design",
                "Git",
                "GitHub",
                "VS Code",
                "NPM",
                "Webpack",
                "Frontend Architecture",
                "UI/UX",
                "Performance Optimization",
                "Cross-Browser Compatibility",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-lg"
                >
                  {/* <img
                    src={`/icons/${skill.toLowerCase().replace(/ /g, "-")}.svg`}
                    alt={skill}
                    className="w-10 h-10 mb-2"
                  /> */}
                  {skills[skill]}
                  <span className="text-white text-sm font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Eduction */}
          <motion.section
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="col-span-12 md:col-span-4"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>
                Education
              </h2>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 h-full shadow-xl">
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                  <div>
                    <p className="text-blue-400 font-medium">2019 - 2023</p>
                    <h4 className="text-lg font-medium">
                      Bachelor of Technology
                    </h4>
                    <p className="text-sm text-gray-300">
                      Computer Engineering
                    </p>
                    <p className="text-sm text-gray-300">
                      St John's College of Engineering and Management
                    </p>
                    <p className="text-blue-400 mt-1 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      8.315 CGPA
                    </p>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                  <div>
                    <p className="text-blue-400 font-medium">2017 - 2019</p>
                    <h4 className="text-lg font-medium">
                      Higher Secondary School Certificate
                    </h4>
                    <p className="text-sm text-gray-300">
                      B.N. Memorial Junior College
                    </p>
                    <p className="text-blue-400 mt-1 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      72%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          {/* experience */}
          <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="col-span-12"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4"
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
                </span>
                Professional Experience
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-gray-800 rounded-xl p-6 shadow-xl mb-6"
            >
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-gray-700 rounded-lg p-4 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                          <span className="font-bold">TS</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Torero Software</h3>
                          <p className="text-sm text-blue-400">
                            May 2024 - Present
                          </p>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">Frontend Developer</h4>
                      <p className="text-sm text-gray-300">Mumbai</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Spearheaded frontend development for the Retailer-one
                        project, focusing on scalable architecture and
                        responsive design.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mr-2 text-xs">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      Key Achievements & Responsibilities
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          Frontend Architecture
                        </h4>
                        <p className="text-sm">
                          Architected and developed the entire frontend of the
                          Retailer-one project using React.js, Tailwind CSS, and
                          Redux.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            React.js
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Tailwind CSS
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Redux
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          Component Engineering
                        </h4>
                        <p className="text-sm">
                          Engineered reusable components and modular design
                          patterns, significantly reducing development time.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Component Design
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Modular Patterns
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          Performance Optimization
                        </h4>
                        <p className="text-sm">
                          Optimized data handling and state management for large
                          datasets exceeding 100,000 records using Redux RTK.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            RTK Query
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Data Optimization
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          Responsive Design
                        </h4>
                        <p className="text-sm">
                          Led the implementation of responsive design strategies
                          with Tailwind CSS for cross-device compatibility.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Mobile-First
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Cross-Device
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-gray-700 rounded-lg p-4 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                          <span className="font-bold">RS</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Retvens Services</h3>
                          <p className="text-sm text-blue-400">
                            June 2023 - May 2024
                          </p>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">Frontend Developer</h4>
                      <p className="text-sm text-gray-300">Mumbai</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Developed and maintained frontend applications with
                        focus on React ecosystem and responsive design.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mr-2 text-xs">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      Key Achievements & Responsibilities
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          React Application Development
                        </h4>
                        <p className="text-sm">
                          Built and maintained multiple React applications with
                          complex state management using Redux and Context API.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            React.js
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Redux
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Context API
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          API Integration
                        </h4>
                        <p className="text-sm">
                          Implemented RESTful API integrations and optimized
                          data fetching patterns using RTK Query.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            REST APIs
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            RTK Query
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          UI/UX Collaboration
                        </h4>
                        <p className="text-sm">
                          Collaborated with designers to implement pixel-perfect
                          UI components and interactive features.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            UI Design
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            User Experience
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-400 mb-2">
                          Responsive Design
                        </h4>
                        <p className="text-sm">
                          Implemented responsive design principles ensuring
                          applications worked seamlessly across all devices.
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Tailwind CSS
                          </span>
                          <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            Responsive Design
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
          {/* projects */}
          <motion.section
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="col-span-12"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4"
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
                </span>
                Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                variants={fadeIn}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white opacity-90"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Retailer-one Platform</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    A comprehensive platform built for retailers to manage
                    inventory, sales, and customer data with real-time
                    analytics.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React.js
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Redux
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      RTK Query
                    </span>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <a
                      href="#"
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      <span>View Details</span>
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
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white opacity-90"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    <path d="M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">E-Commerce Dashboard</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    An interactive dashboard for e-commerce businesses with
                    sales analytics, inventory tracking, and order management.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Context API
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <a
                      href="#"
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      <span>View Details</span>
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
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white opacity-90"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Finance Tracker</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    A personal finance application that helps users track
                    expenses, set budgets, and visualize spending patterns.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React.js
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Redux
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <a
                      href="#"
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      <span>View Details</span>
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
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
          {/* contact */}
          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="col-span-12"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                Contact Me
              </h2>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 bg-gradient-to-br from-blue-600 to-purple-600 p-8">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-gray-100 mb-6">
                    I'm open to job opportunities where I can contribute, learn,
                    and grow. Feel free to reach out if you have any questions
                    or just want to connect.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Phone</p>
                        <p>+91 8788 373 686</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Email</p>
                        <p>pranayambre01@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Location</p>
                        <p>Mumbai, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 p-8">
                  <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Pranay Ambre
              </h2>
              <p className="text-gray-400 text-sm">Frontend Developer</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
