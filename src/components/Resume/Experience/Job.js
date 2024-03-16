import React from 'react';
import PropTypes from 'prop-types';

const Job = ({
  data: {
    name, position, year, subjects, roles,
  },
}) => (
  <tr className="jobs-container">
    <td>
      {year}
    </td>
    <td>
      <h4 className="degree" style={{ fontWeight: 'bold', margin: '0px' }}>{position}</h4>
      <p className="school" style={{ margin: '0px' }}>{name}</p>
      { subjects ? <span style={{ display: 'block' }}><p className="school" style={{ fontWeight: 'bold', margin: '0px' }}>{subjects ? 'Roles : ' : ''}</p><p style={{ margin: '0px' }}>{subjects}</p></span> : ''}
      { roles ? <span style={{ display: 'block' }}><p className="school" style={{ fontWeight: 'bold', margin: '0px' }}>{roles ? 'Roles : ' : ''}</p><p style={{ margin: '0px' }}>{roles}</p></span> : ''}
    </td>
  </tr>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    subjects: PropTypes.string,
    roles: PropTypes.string,
  }).isRequired,
};

export default Job;
