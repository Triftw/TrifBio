export interface Industry {
    name: string;
    description: string;
    technologies: string[];
    icon?: string;
  }
  
  export const industries: Industry[] = [
    {
      name: "Automatic Optical Inspection(AOI)",
      description: "Developed and maintained a 3D Viewer for viewing the AOI inspection result with DirectX 11 and MFC on Windows",
      technologies: ["C++", "DirectX", "OpenCV","Jira","git"]
    },
    {
      name: "Human Computer Interaction(HCI) with VR",
      description: "Researched and developed VR applications to study and enhance user interaction, focusing on immersive environments and tactile feedback.",
      technologies: ["HCI", "VR", "Unity","Arduino"]
    },
    {
      name: "Machine Learning / Deep Learning",
      description: "Applied Python, TensorFlow, and Keras to build and train deep learning models, especially for Chinese font conversion",
      technologies: ["Python", "Tensorflow", "Keras","Pandas"]
    },
    {
      name: "Game Development and Interaction Design",
      description: "Created VR games and prototypes during my studies, combining gameplay mechanics with thoughtful interaction design to improve player experience.",
      technologies: ["Unity", "photon server", "VR", "blender", "photoshop","IOTtalk"]
    },
    {
      name: "User Experience(UX)",
      description: "Designed and evaluated user interfaces on industrial applications with a research-driven approach, aiming to bridge usability, accessibility, and technology.",
      technologies: ["UX", "interview", "survey"]
    }
  ];