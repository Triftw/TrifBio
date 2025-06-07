export interface WorkExperience {
    id: number;
    position: string;
    company: string;
    timeFrame: string;
    technologies: string[];
    description?: string;
}

export const experiences: WorkExperience[] = [
    {
      id: 1,
      position: "Research & Development Engineer",
      company: "Test Research Inc.",
      timeFrame: "2021 - 2023, 2024 - Present",
      technologies: ["React", "TypeScript", "Tailwind"],
      description: "I developed and maintained a 3D Viewer for AOI inspection results using DirectX 11 and MFC on Windows. I encapsulated the 3D engine into DLLs and used them to create customized tools for AOI research and customer solutions. I conducted UI/UX design evaluations, including interaction mapping, heuristic evaluation, and usability testing. Based on the UX evaluations, I improved the system’s aesthetics and usability with a new DirectX 11-based UI."
    },
    {
      id: 2,
      position: "Research Assistant",
      company: " National Taiwan University and National Chiao Tung University",
      timeFrame: "2019 - 2021",
      technologies: ["Unity", "VR", "HCI"],
      description: "I have participated in cross-disciplinary art projects involving VR, haptics, and sensing. I published papers at the ACM UIST and CHI conferences, as well as in TAICHI. Additionally, I developed experimental apps, including JND and VR games using Unity3D and Python, to collect data and showcase interaction design capabilities."
    }
  ];