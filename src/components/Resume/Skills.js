import React from 'react';
import skills from '../../data/resume/skills';

const Skills = () => (
  <div className="skills">
    <div className="link-to" id="skills" />
    <div className="title">
      <h3>Skills</h3>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <cite>
        <table>
          {skills.map((reference) => (
            <tr>
              <td><b>{reference.head}</b></td>
              <td>{reference.value}</td>
            </tr>
          ))}
        </table>
      </cite>
    </div>

  </div>
);

export default Skills;
