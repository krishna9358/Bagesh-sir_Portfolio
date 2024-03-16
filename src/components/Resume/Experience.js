import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    <table>
      {data.map((job) => (
        <Job
          data={job}
          key={`${job.name}-${job.position}`}
        />
      ))}
    </table>
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    subjects: PropTypes.string,
    roles: PropTypes.string,
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
