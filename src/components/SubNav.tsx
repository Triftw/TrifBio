// components/SubNav.tsx
const SubNav = () => (
  <div className="md:fixed top-14 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 bg-opacity-90 backdrop-blur-md">
    <div className="flex justify-center space-x-4 py-2 max-w-7xl mx-auto">
    <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">About</a>
    <a href="#tech" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Tech Stack</a>
    <a href="#industries" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Industries</a>
    <a href="#projects" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Projects</a>
    <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Contact</a>
    </div>
  </div>
);

export default SubNav;
