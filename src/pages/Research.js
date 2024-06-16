import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Research/Cell';
import { published, review } from '../data/research';

const colors = ['#44BBA4','#ffffff','#B89E97',]

const Research = () => (
  <Main
    title="Research Publications"
    description="Learn about Bagesh Kumar's research publications."
  >
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2><Link to="/research">Research Publications</Link></h2>
        </div>
      </header>
      <h1>Journal Articles</h1>
      {published.map((project, index) => (
        <div key={project.title} style={{ backgroundColor: colors[index % colors.length], padding: '10px', margin: '10px 0' }}>
          <Cell
            data={project}
          />
        </div>
      ))}
      <br />
      <h1>Conferences, Manuscript Under Review</h1>
      {review.map((project, index) => (
        <div key={project.title} style={{ backgroundColor: colors[index % colors.length], padding: '10px', margin: '10px 0' }}>
          <Cell
            data={project}
          />
        </div>
      ))}
    </article>
  </Main>
);

export default Research;
