import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Research/Cell';
import { published, review } from '../data/research';

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
      {published.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      <br />
      <h1>Conferences, Manuscript Under Review</h1>
      {review.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Research;
