import { Link } from "react-router-dom";

type MainNavProps = {
  activePath: string;
};

const MainNav = ({ activePath }: MainNavProps) => {
  const linkClass = (path: string) =>
    `px-3 py-2 font-medium transition ${
      activePath === path
        ? "text-white bg-primary"
        : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 bg-opacity-90 backdrop-blur-md">
      <div className="flex justify-center items-center space-x-4 py-2 max-w-7xl mx-auto">
        <span className="text-xl font-bold text-primary">
          Trif , (Tsui Fu Chiu)
        </span>
        <Link to="/" className={linkClass("/")}>
          Tech
        </Link>
        <Link to="/activist" className={linkClass("/activist")}>
          Activist
        </Link>
        <Link to="/hobbies" className={linkClass("/hobbies")}>
          Hobbies
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
