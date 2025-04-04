import { motion } from "framer-motion";
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
export const EducationComponent = () => {
  return (
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
              <h4 className="text-lg font-medium">Bachelor of Technology</h4>
              <p className="text-sm text-gray-300">Computer Engineering</p>
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
  );
};
