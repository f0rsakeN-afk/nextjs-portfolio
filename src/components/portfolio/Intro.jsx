'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LinkIcon } from '@/components/ui/linkIcon';

const contact = [
  {
    title: 'GitHub',
    url: 'https://github.com/f0rsakeN-afk',
    icon: Github,
    email: false,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/f0rsaken/',
    icon: Linkedin,
    email: false,
  },
  { title: 'Mail', url: 'nareshwork13@gmail.com', icon: Mail, email: true },
];

export const Intro = () => {
  return (
    <div className="mt-10 mb-6 max-w-3xl  pb-10 text-center md:text-right-left leading-6">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 1 }}
        className="mb-2 text-4xl lg:text-5xl text-center md:text-left font-mono"
      >
        Hello 😊
        <br />
        I'm <span className="text-purple-500">Naresh Rajbanshi</span> a MERN
        Developer from Biratnagar, Nepal.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 1.5, stiffness: 500 }}
        className="text-gray-500 dark:text-gray-400 text-center md:text-left leading-7"
      >
        Computer Engineering student mastering the MERN stack (React, Node.js,
        Express, MongoDB). Eager to apply my technical skills to build
        innovative web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 2, stiffness: 500 }}
        className="relative inline group"
      >
        <a
          href="mailto:nareshwork13@gmail.com"
          title="Get in touch"
          className="text-left inline-block mt-2 mb-4 py-3 px-2 bg-violet-50 dark:bg-violet-800/40 border border-violet-100 dark:border-gray-800 rounded-xl w-[80%] sm:w-[30%]"
        >
          <span className="rounded-md px-6 py-2 bg-white dark:bg-white/90 dark:hover:bg-white shadow-md group-hover:shadow-sm dark:text-black transition-all block text-center">
            Hire Me
          </span>
        </a>
        <div className="absolute left-2 -top-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 2.5, stiffness: 500 }}
        className="flex justify-center md:justify-start gap-4 items-center mt-4"
      >
        {contact.map(({ title, url, icon: Icon, email }, i) => (
          <LinkIcon key={i} {...{ title, url, Icon, email }} />
        ))}
      </motion.div>
    </div>
  );
};
