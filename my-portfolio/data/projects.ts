export type Project = {
  title: string;
  tech: string[];
  link: string;
  image: string;
};

export const projects: Project[] = [

  {
    title: 'RoomieRent',
    techStack: 'Next.js, React, Tailwind CSS',
    link: 'https://github.com/princeudoewah/roomierent',
    image: '/roomierent.png', // Update with your image path
  },
  {
    title: 'Clyna Patient Directory',
    techStack: 'React, Tailwind CSS',
    link: 'https://github.com/princeudoewah/clyna-patient-directory',
    image: '/clyna.png', // Update with your image path
  },
  {
    title: 'Portfolio Website',
    techStack: 'Next.js, Tailwind CSS, TypeScript',
    link: 'https://github.com/princeudoewah/my-portfolio',
    image: '/portfolio.png', // Update with your image path
  },
];