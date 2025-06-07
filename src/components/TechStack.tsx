import { useState } from "react";
import { motion } from "framer-motion";
import { technologies, type Technology } from "../data/technologies";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    Technology["category"] | "all"
  >("all");

  const categories = [
    "all",
    ...new Set(technologies.map((tech) => tech.category)),
  ];

  const filteredTechnologies = technologies.filter(
    (tech) => selectedCategory === "all" || tech.category === selectedCategory
  );

  return (
    <section
      id="tech"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category as Technology["category"] | "all")
              }
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105
                ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:shadow-md"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`rounded-lg p-6 ${tech.brandColor.bg} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className={`text-lg font-semibold ${tech.brandColor.text}`}
                  >
                    {tech.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 capitalize px-3 py-1 bg-white dark:bg-gray-700 rounded-full">
                    {tech.category}
                  </span>
                </div>

                <div className="relative h-2 bg-white dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-primary dark:bg-gray-200`}
                  />
                </div>

                <div className="mt-2 text-right">
                  <span
                    className={`text-sm font-medium ${tech.brandColor.text}`}
                  >
                    {tech.proficiency}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
