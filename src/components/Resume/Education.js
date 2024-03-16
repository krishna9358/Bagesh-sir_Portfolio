import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    <table>
      {data.map((degree) => (
        <Degree
          data={degree}
          key={degree.school}
        />
      ))}
    </table>
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
    thesis: PropTypes.string,
    project: PropTypes.string,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
