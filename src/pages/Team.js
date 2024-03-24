import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/Team/Cell';
import '../static/css/pages/team.scss'
const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        const data = await axios.get("http://localhost:4000/team", { headers });
        setTeam(data.data.data);
        console.log(data.data.data);
      } catch (error) {
        console.error('Error fetching team:', error);
      }
    };
    fetchTeam();
  }, []);
  return (
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
      {team ? team.map((photo) => (
            <Cell
              data={photo}
              key={photo.cap}

            />
          )) : <></>}
      </div>
    </article>
  </Main>
)};

export default Team;
