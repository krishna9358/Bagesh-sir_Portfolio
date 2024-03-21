import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container" style={{ margin: '20px' }}>
    <article className="mini-post" style={{ width: 'fit-content' }}>
      <header style={
        {
          maxWidth: '400px',
          maxHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          padding: '10px',
        }
      }
      >
        <img src={data.link} alt={data.cap} style={{ width: '100%', height: 'auto' }} />
      </header>
      <div className="caption">
        {data.caption}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    cap: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,

  }).isRequired,
};

export default Cell;
