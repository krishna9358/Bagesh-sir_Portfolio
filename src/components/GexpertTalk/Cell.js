import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data, bgColor }) => {
  return (
    <div className="cell-container" style={{ margin: '20px' }}>
      <article className="mini-post" style={{ width: 'fit-content', backgroundColor: bgColor }}>
        <header
          style={{
            maxWidth: '400px',
            maxHeight: '600px',
            overflow: 'hidden',
            display: 'flex',
            padding: '10px',
          }}
        >
          <div className="cell" style={{ backgroundImage: `url(${data.link})` }} />
        </header>
        <div
          className="caption"
          dangerouslySetInnerHTML={{ __html: data.caption }}
        />
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    cap: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Cell;
