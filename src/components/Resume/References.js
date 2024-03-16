import React from 'react';
import PropTypes from 'prop-types';

const References = ({ data }) => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>References</h3>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <cite>
        <table>
          <tr style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {data.map((reference) => (

              <td>
                <strong>{reference.name}</strong><br />
                <span>{reference.position}</span><br />
                <span>{reference.dept}</span><br />
                <span>{reference.college}</span><br />
                <span>{reference.city}</span><br />
                <span>{reference.pin}</span><br />
                <span><a href={reference.link}>{reference.mail}</a></span>
              </td>
            ))}
          </tr>
        </table>
      </cite>
    </div>
  </div>
);

References.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    dept: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    pin: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
};

References.defaultProps = {
  data: [],
};

export default References;
