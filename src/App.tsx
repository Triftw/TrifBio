import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Industries from "./components/Industries";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SEO from "./components/SEO";
import Experience from "./components/Experience";
import ResumeDownload from "./components/ResumeDownload";

// 新增頁面
import Activist from "./extraPages/Activist";
import Hobbies from "./extraPages/Hobby";

// 新增元件
import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";

const MainPage = () => (
  <>
    <SEO />
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SubNav />
      <main className="pt-40">
        <Hero />
        <TechStack />
        <Industries />
        <Experience />
        <Projects />
        <ResumeDownload />
        <Contact />
      </main>
    </div>
  </>
);

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <HelmetProvider>
      <MainNav activePath={path} />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/activist" element={<Activist />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
