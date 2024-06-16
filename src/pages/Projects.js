import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import colors from '../data/colors';


const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Prof. Dr. Bagesh Kumar projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
        </div>
      </header>
      {data.map((project, index) => (
        <Cell
          data={project}
          key={project.title}
          bgColor={colors[index % colors.length]}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
