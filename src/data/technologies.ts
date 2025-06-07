export type TechBrandColor = {
    bg: string;  // Tailwind background color class
    text: string; // Tailwind text color class
    border?: string; // Optional Tailwind border color class
  };
  
  export interface Technology {
    name: string;
    category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'libraries';
    proficiency: number;
    brandColor: TechBrandColor;
  }
  

  export const technologies: Technology[] = [
    // Languages
    {
      name: 'C++',
      category: 'languages',
      proficiency: 90,
      brandColor: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/20',
        text: 'text-indigo-600 dark:text-indigo-400',
      }
    },
    {
      name: 'Python',
      category: 'languages',
      proficiency: 80,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'C#',
      category: 'languages',
      proficiency: 75,
      brandColor: {
        bg: 'bg-sky-100 dark:bg-sky-900/20',
        text: 'text-sky-600 dark:text-sky-400',
      }
    },
    {
      name: 'Java',
      category: 'languages',
      proficiency: 50,
      brandColor: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-600 dark:text-yellow-400',
      }
    },
    {
      name: 'TypeScript',
      category: 'languages',
      proficiency: 30,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'C',
      category: 'languages',
      proficiency: 40,
      brandColor: {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
      }
    },
  
    // Frameworks
    {
      name: 'React',
      category: 'frameworks',
      proficiency: 30,
      brandColor: {
        bg: 'bg-black/5 dark:bg-white/5',
        text: 'text-black dark:text-white',
      }
    },
    {
      name: 'Vue.js',
      category: 'frameworks',
      proficiency: 40,
      brandColor: {
        bg: 'bg-emerald-100 dark:bg-emerald-900/20',
        text: 'text-emerald-600 dark:text-emerald-400',
      }
    },
    {
      name: 'Flutter',
      category: 'frameworks',
      proficiency: 10,
      brandColor: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/20',
        text: 'text-cyan-600 dark:text-cyan-400',
      }
    },
  
    // Tools
    {
      name: 'Visual Studio',
      category: 'tools',
      proficiency: 90,
      brandColor: {
        bg: 'bg-sky-100 dark:bg-sky-900/20',
        text: 'text-sky-600 dark:text-sky-400',
      }
    },
    {
      name: 'Jira',
      category: 'tools',
      proficiency: 50,
      brandColor: {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
      }
    },
    {
      name: 'Git',
      category: 'tools',
      proficiency: 70,
      brandColor: {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
      }
    },
    {
      name: 'VSCode',
      category: 'tools',
      proficiency: 80,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'Figma',
      category: 'tools',
      proficiency: 50,
      brandColor: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-600 dark:text-yellow-400',
      }
    },
    {
      name: 'Unity',
      category: 'tools',
      proficiency: 70,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'DirectX',
      category: 'libraries',
      proficiency: 75,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'CUDA',
      category: 'libraries',
      proficiency: 60,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'tensorflow',
      category: 'libraries',
      proficiency: 50,
      brandColor: {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
      }
    },{
      name: 'OpenCV',
      category: 'libraries',
      proficiency: 50,
      brandColor: {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
      }
    },
  ];