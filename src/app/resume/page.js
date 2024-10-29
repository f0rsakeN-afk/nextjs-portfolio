import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import { About } from '@/components/resume/about';
import { Intro } from '@/components/resume/intro';
import { Work } from '@/components/resume/work';
import { Skills } from '@/components/resume/skills';
import { Portfolio } from '@/components/resume/portfolio';
import { Education } from '@/components/resume/education';


const resume = RESUME_DATA;

export const metadata = {
  title: `${resume.name} | ${resume.about}`,
  description: resume.summary,
};

export default function Page() {
  return (
    <>
      <div className="resume space-y-8">
        <Intro data={resume} />
        <About data={resume} />
        <Work data={resume.work} />
        <Education data={resume.education} />
        <Skills data={resume.skills} />
        <Portfolio data={resume.portfolio} />
      </div>

    </>
  );
}
