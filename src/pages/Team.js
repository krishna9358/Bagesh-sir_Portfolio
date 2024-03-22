import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Team/Cell';
import data from '../data/team';
import '../static/css/pages/team.scss'
const Team = () => (
  <Main
    title="Team"
    description="A glance at the team who work with Prof. Dr. Bagesh Kumar"
  >
    <article className="post" id="Team">
      <header>
        <div className="title">
          <h2><Link to="/team">Meet the Team</Link></h2>
        </div>
      </header>
      <div className='team-container'>
        {data.map((photo) => (
          
          <Cell data={photo} 
            key={photo.cap}
          />
        
        ))}
      </div>
    </article>
  </Main>
);

export default Team;
