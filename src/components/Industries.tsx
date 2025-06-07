import { motion } from 'framer-motion';
import { industries } from '../data/industries';
import { 
  FaChartLine, FaMedkit, FaGraduationCap, FaHome, 
  FaShoppingCart, FaBuilding, FaTruck 
} from 'react-icons/fa';

const getIndustryIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'finance': return FaChartLine;
    case 'healthcare': return FaMedkit;
    case 'education': return FaGraduationCap;
    case 'home automation': return FaHome;
    case 'e-commerce': return FaShoppingCart;
    case 'real estate': return FaBuilding;
    case 'transportation': return FaTruck;
    default: return FaChartLine;
  }
};

const Industries = () => {
  return (
    <section id="industries" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Industries I've Worked In</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Diverse experience across multiple sectors, delivering innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = getIndustryIcon(industry.name);
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary bg-opacity-10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {industry.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-white dark:bg-gray-700 rounded-full shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;