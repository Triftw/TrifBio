import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { activistExperiences } from "./data/activistExperiences";

const ActivistExperienceTimeline: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Activist Experience
          </h2>
        </motion.div>

        <div className="space-y-6 border-l-2 border-dashed border-primary/50 dark:border-primary/30">
          {activistExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full bg-white dark:bg-gray-900">
                <FaBriefcase className="h-7 w-7 text-primary" />
              </div>
              <div className="ml-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold dark:text-white">
                      {exp.position}
                    </h4>
                    <span className="text-sm font-semibold text-primary dark:text-primary/80">
                      {exp.timeFrame}
                    </span>
                  </div>
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </h5>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      Skills Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-white dark:bg-gray-700 rounded-full shadow-sm dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ActivistExperienceTimeline;
