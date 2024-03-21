import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Gallery/Cell';
import data from '../data/gallery';

const Gallery = () => (
  <Main
    title="Events"
    description="A glimpse into the life of Prof. Dr. Bagesh Kumar"
  >
    <article className="post" id="Gallery">
      <header>
        <div className="title">
          <h2><Link to="/gallery">Events</Link></h2>
        </div>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '1rem' }}>
        {data.map((photo) => (
          <Cell
            data={photo}
            key={photo.cap}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Gallery;
