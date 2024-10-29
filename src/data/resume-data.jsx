import { Github, Linkedin } from 'lucide-react';

export const RESUME_DATA = {
  name: 'Naresh Rajbanshi',
  about:
    'Enthusiastic MERN developer, with a strong affinity for backend technologies.',
  location: {
    state: 'Nepal',
    link: 'https://www.google.com/maps/place/Nepal/',
  },
  contact: {
    email: 'nareshwork13@gmail.com',
    social: [
      {
        name: 'GitHub',
        link: 'https://github.com/f0rsakeN-afk',
        icon: Github,
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/f0rsaken/',
        icon: Linkedin,
      },
    ],
  },
  summary:
    'Computer engineering student from Biratnagar, Nepal, crafting innovative web solutions. Combining academic knowledge with hands-on experience in the MERN stack to build the digital future.',
  work: [],
  education: {
    school: 'Purbanchal University School of Engineering',
    degree: "Bachelor's Degree in Computer Engineering",
    start: '2022',
    end: 'ongoing',
  },
  skills: [
    'Next.js',
    'React',
    'Typescript',
    'Javascript',
    'Tailwind CSS',
    'Nodejs',
    'Mongodb',
    'Express',
    'Reactjs',
  ],
  portfolio: [
    {
      title: 'Sflix',
      techStack: ['Reactjs', 'TMDB API', 'Tailwind CSS', 'Redux'],
      description:
        'SFlix is a web application that allows users to discover trending, playing now, and upcoming movies.',
      link: 'https://sflix-ten.vercel.app/',
      isDone: true,
    },
  ],
};
