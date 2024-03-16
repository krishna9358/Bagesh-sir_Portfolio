import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container" style={{ margin: '20px' }}>
    <article className="mini-post" style={{ width: 'fit-content' }}>
      <header style={
                      {
                        maxWidth: '250px',
                        maxHeight: '250px',
                        overflow: 'hidden',
                        display: 'flex',
                        padding: '10px',
                      }
                }
      >
        <img
          src={data.link}
          alt={data.name}
          style={
                {
                  width: '230px',
                  height: '230px',
                  borderRadius: '100%',
                  border: '10px solid grey',
                }
            }
        />
      </header>
      <center><h4 style={{ padding: '0px', margin: '0px' }}>{data.name}</h4></center>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
