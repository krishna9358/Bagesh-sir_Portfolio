import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <tr className="degree-container">
    <td>
      {data.year}
    </td>
    <td>
      <h4 className="degree" style={{ fontWeight: 'bold', margin: '0px' }}>{data.degree}</h4>
      <p className="school" style={{ margin: '0px' }}>{data.school}</p>
      {data.thesis ? <span style={{ display: 'block', padding: '0px' }}><p className="school" style={{ fontWeight: 'bold', margin: '0px' }}>{data.thesis ? 'Thesis Title : ' : ''}</p><p style={{ margin: '0px' }}>{data.thesis ? data.thesis : ''}</p></span> : '' }
      {data.project ? <span style={{ display: 'block' }}><p className="school" style={{ fontWeight: 'bold', margin: '0px' }}>{data.project ? 'Project Title : ' : ''}</p><p style={{ margin: '0px' }}>{data.project ? data.project : ''}</p></span> : '' }
      {data.cgpi ? <span style={{ display: 'flex' }}><p className="school" style={{ fontWeight: 'bold', margin: '0px' }}>{data.cgpi ? 'CGPI : ' : ''}</p><p style={{ margin: '0px' }}>{data.cgpi ? data.cgpi : ''}</p></span> : '' }
      {data.percentage ? <span style={{ display: 'flex' }}><p className="school" style={{ fontWeight: 'bold', margin: '0px' }}>{data.percentage ? 'Percentage : ' : ''}</p><p style={{ margin: '0px' }}>{data.percentage ? data.percentage : ''}</p></span> : '' }
    </td>
  </tr>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    thesis: PropTypes.string,
    project: PropTypes.string,
    cgpi: PropTypes.number,
    percentage: PropTypes.number,
  }).isRequired,
};

export default Degree;
