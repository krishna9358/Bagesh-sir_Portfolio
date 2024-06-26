import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import references from '../data/resume/references';
import colors from '../data/colors';


// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills />,
  Courses: () => <Courses data={courses} />,
  References: () => <References data={references} />,
};

const Resume = () => (
  <Main 
    title="Resume"
    description="Bagesh Kumar's Resume. IIIT Allahabad, M.Tech, B.Tech, Ph.D., B.Tech, Professor, Manipal University, Jaipur"
  > 
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section], index) => (
        <div key={name} id={name.toLowerCase()} style={{ backgroundColor: colors[index % colors.length], padding: '10px', margin: '10px 0' }}>
          <Section />
        </div>
      ))}
    </article>
  </Main>
);

export default Resume;
