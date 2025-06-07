import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Trif</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            I like to build stuff with code to help people
          </p>
        </motion.div>

        {/* Brief Experience Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="text-center">
            <span className="text-5xl md:text-6xl font-bold text-primary">4</span>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">YEARS EXPERIENCE</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-16">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <p className="text-gray-600 dark:text-gray-300">
              Currently available for new opportunities
            </p>
          </div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 ${tech.brandColor.bg} ${tech.brandColor.text} rounded-full shadow-xs hover:shadow-md transition-all duration-300`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who, What and Why!</h2>
          
          {/* Professional Experience */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As a technology professional with over 3 years of experience, I have had the privilege of working with various industries including <span className="text-primary font-medium">research</span>, <span className="text-primary font-medium">automatic optical inspection(AOI)</span>, <span className="text-primary font-medium">3D constructing</span>, and more. My most recent experience was as a <span className="font-medium">R&D Software Engineer</span> at <span className="font-medium">Test Research Inc.</span>,
               where I excelled in <span className="text-primary font-medium">3D Viewer </span> application to view our inspection result.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
            <p className="mb-4">
            Hey, I’m Tsui Fu Chiu — a builder of ideas, one line of code at a time.
I love making technology that feels thoughtful, reliable, and maybe even a little magical.
I move fast when prototyping, but I’m patient when it comes to research, testing, and trying new ideas. From VR experiments to C++ engineering to deep learning adventures, I'm always chasing that satisfying moment when everything just clicks.
Whether it's helping researchers, players, or everyday users, I aim for work that makes life smoother, smarter, and a bit more fun.</p>
            <p>
              I am well-versed in a variety of frameworks and technologies, including <span className="text-primary font-medium">DirectX</span>, <span className="text-primary font-medium">Unity</span>, <span className="text-primary font-medium">React/Vuejs</span>, <span className="text-primary font-medium">tensorflow and Keras</span>, and <span className="text-primary font-medium">git</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;