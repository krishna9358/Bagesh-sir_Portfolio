import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/alumni/Cell';
import data from '../data/alumni';
import '../static/css/pages/alumni.scss';
import colors from '../data/colors';


const Alumni = () => (
  <Main
    title="Alumni"
    description="A glance at the Alumni who work with Prof. Dr. Bagesh Kumar"
  >
    <article className="post" id="Alumni">
      <header>
        <div className="title">
          <h2><Link to="/alumni">Meet the Alumni</Link></h2>
        </div>
      </header>
      <div className='alumni-container'>
        {data.map((photo, index) => {
          const bgColor = colors[index % colors.length];
          return (
            <Cell
              data={photo}
              key={photo.cap}
              bgColor={bgColor}
            />
          );
        })}
      </div>
    </article>
  </Main>
);

export default Alumni;
