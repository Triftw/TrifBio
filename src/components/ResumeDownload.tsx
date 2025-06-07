import React from 'react';
import { motion } from 'framer-motion';

interface ResumeDownloadProps {
  resumeUrl?: string;
  onDownload?: () => void;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ 
  resumeUrl = 'https://drive.google.com/file/d/1y18aJTq8bWDHxUVZL7cRdLy9DxAB56cq/view?usp=sharing',
  onDownload 
}) => {
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    }
    if (resumeUrl) {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-1xl font-bold mb-4 dark:text-white">
              Want to Know more?
            </p>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 
                       transition-colors duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="mr-2">Download Resume</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownload;