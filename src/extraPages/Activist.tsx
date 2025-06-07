import React from "react";
import ActivistExperience from "./Activist/ActivistExperience";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivistOrganization from "./Activist/ActivistOrganization";
import ActivistGallery from "./Activist/ActivistGallery";

const Activist: React.FC = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const hasPromptedRef = useRef(false);
  useEffect(() => {
    if (!confirmed) {
      hasPromptedRef.current = true;
      const result = window.confirm(
        "You are about to enter the Activist page, which may contain extensive personal information related to social and political issues. Please ensure that accessing this page does not violate your company's policies on fair recruitment practices."
      );
      if (result) {
        setConfirmed(true);
      } else {
        navigate("/");
      }
    }
  }, [confirmed, navigate]);

  if (!confirmed) return null; // 尚未確認前不渲染內容

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section
        id="statement"
        className="py-20 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 space-y-2 text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
          <h2 className="text-3xl font-bold mb-6">Why I Advocate</h2>
          <p className="text-lg">
            I advocate not only out of a sense of responsibility, but because I
            believe it is my lifetime goal—a path of self-actualization.
            Activism, to me, is both a personal calling and a collective
            commitment to shaping a freer world. My name, Trif, stands for Fight
            For Freedom.
          </p>
        </div>
      </section>

      {/* 2. 組織介紹區塊（圖片與介紹） */}
      <section id="organizations" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Organizations I've Worked With
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I am deeply grateful to these organizations and the wonderful people
            who make them what they are.
          </p>
          <ActivistOrganization />
          {/* Organization cards 放這邊，之後我可以幫你寫 component */}
        </div>
      </section>

      {/* 1. Experience 區塊 */}
      <section id="experience">
        <ActivistExperience />
      </section>

      {/* 3. Contact 區塊（與主頁一樣） */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/*<h2 className="text-3xl font-bold mb-6">Contact and Links</h2>*/}
          {/* Contact component 放這邊，或直接複製主頁內容 */}
        </div>
      </section>
      <section className="mt-2 max-w-6xl mx-auto px-4 text-justify text-gray-800 dark:text-gray-200 leading-relaxed space-y-6">
        <h2 className="text-3xl font-bold mb-6">Issues that I Care About</h2>
        <p className="text-lg">
          I am a Taiwanese activist committed to Taiwan independence, gender
          justice, and global solidarity against authoritarianism. I view the
          Republic of China as a colonial regime lacking legitimacy, despite its
          recent democratization, and I believe Taiwan must reckon with its
          history of systemic violence and exploitation.
        </p>
        <p className="text-lg">
          In the face of the PRC’s military threats, disinformation, and
          repression, I stand firmly against the Chinese Communist Party’s
          imperialism and support resistance movements in Tibet, Hong Kong,
          Xinjiang, and beyond. I also advocate for gender liberation in
          Taiwan—challenging binary norms, opposing forced outing through ID
          systems, and pushing for legal reforms like surgery-free gender
          change, toward a truly inclusive and equitable society.
        </p>
      </section>

      <section id="Photos">
        <ActivistGallery />
      </section>
    </main>
  );
};

export default Activist;
