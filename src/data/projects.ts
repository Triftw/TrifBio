export interface ProjectImage {
    url: string;
    alt: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    images: ProjectImage[];
    featured: boolean;
    githubUrl?: string;
    videoUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: "recubic",
      title: "ReCubic: VR Rubik's cube game with RFID",
      shortDescription: "Exploring Tangible User Interface for Enhancing Immersivity and Spatial Ability in Space Recomposition VR Game",
      fullDescription: "Recubic is a minimalist 3D puzzle game where players rotate and assemble cubes to solve spatial challenges. It features intuitive controls, clean visuals, and dynamic sound design to create a relaxing, immersive experience. Developed in Unity with C#, Recubic steadily increases in difficulty to keep players engaged.",
      techStack: ["Unity", "RFID", "VR", "User Research", "HCI"],
      images: Array.from({ length: 4 }, (_, i) => ({
        url: `/images/projects/Recubic${i+1}.png`,
        alt: `Result screenshot ${i + 1}`
      })),
      featured: true,
      videoUrl: "https://www.youtube.com/watch?v=nN8sW5xe-W0&ab_channel=TrifChiu"
    },
    {
      id: "gaiters",
      title: "Gaiters: Skin Stretch on Legs for VR Experiences {CHI'20}",
      shortDescription: "Gaiters: Exploring Skin Stretch Feedback on Legs for Enhancing Virtual Reality Experiences {CHI'20}",
      fullDescription: "We present Gaiters, a leg-worn device that generates two-dimensional skin stretch feedback on the legs. Skin stretch is an effective way to simulate virtual textures, forces, and directional cues, but has been rarely applied to lower limbs. Our studies show that Gaiters can create rich haptic experiences during various leg movements. Participants found the feedback compelling and enjoyable for enhancing virtual reality interactions.",
      techStack: ["Unity", "Arduino", "VR", "processing", "HCI"],
      images: Array.from({ length: 5 }, (_, i) => ({
        url: `/images/projects/gaiters${i+1}.png`,
        alt: `Gaiters device photos and screenshots ${i + 1}`
      })),
      featured: true,
      videoUrl:'https://www.youtube.com/watch?v=jUDOkhaOa2U&ab_channel=ACMSIGCHI'
    },
    {
      id: "masque",
      title: "Masque: Exploring Lateral Skin Stretch on the Face with HMD in VR",
      shortDescription: "Masque: Exploring Lateral Skin Stretch Feedback on the Face with Head-Mounted Displays {UIST'19}",
      fullDescription: "We introduce Masque, a head-mounted display (HMD) prototype that delivers two-dimensional skin stretch feedback to the face. Skin stretch enhances the perception of forces and directional cues but has rarely been explored as HMD output for virtual reality. Our studies confirmed that Masque’s feedback is comfortable, perceivable, and effective for enriching VR experiences. Participants found the facial haptics engaging and considered it a valuable addition to VR interactions.",
      techStack: ["Unity", "Arduino", "VR", "processing", "HCI"],
      images: Array.from({ length: 4 }, (_, i) => ({
        url: `/images/projects/masque${i+1}.png`,
        alt: `Video screenshot ${i + 1}`
      })),
      featured: true,
      videoUrl:'https://www.youtube.com/watch?v=4LMiQTOOJ7o&ab_channel=ACMSIGCHI'
    },
    {
      id: "p2pfont",
      title: "Pix2Pix Font Conversion",
      shortDescription: "A fount conversion research aiming to reduce Chinese font designers' workload",
      fullDescription: "This research uses the Pix2Pix deep learning model to largely reduce work load for font designer. The model also allows for adjustments through different epochs, creating new fonts by identifying ideal parameters.",
      techStack: ["Python", "TensorFlow", "pix2pix"],
      images: Array.from({ length: 8 }, (_, i) => ({
        url: `/images/projects/font${i+1}.png`,
        alt: `Result screenshot ${i + 1}`
      })),
      featured: true,
      githubUrl:'https://github.com/Triftw/P2PFont',
      videoUrl:'https://drive.google.com/file/d/1twEGh9gqUq1MVZdmUG7Da8or8BCmGQ6Y/view'
    }
  ];