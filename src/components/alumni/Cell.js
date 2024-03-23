import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container" style={{ margin: '0.78125rem',
  width:'fit-content' }}>
    <article className="mini-post" style={{ width: 'fit-content' }}>
      <header style={{
        maxWidth: '15.625rem',
        maxHeight: '15.625rem',
        overflow: 'hidden',
        display: 'flex',
        padding: '0.625rem',
      }}
      >
        <img
          src={data.link}
          alt={data.name}
          style={{
            width: '14.375rem',
            height: '14.375rem',
            borderRadius: '100%',
            border: '0.3125rem solid grey',
            padding: '0.3125rem',
          }}
        />
      </header>
      <center><h3 style={{ padding: '0px', margin: '0px' }}>{data.name}</h3></center>
      <center><h5 style={{ padding: '0px', margin: '0px' }}>
  {data.work || (data.intern && data.intern.length > 0) ? 
    data.work || data.intern : 
    data.education}
</h5></center>
      <center>
        <a href={data.linkedin} target="_blank" rel="noreferrer">
          <img
            src={data.linkedinImg}
            style={{
              width: '1.25rem',
              height: '1.25rem',
              marginRight: '0.625rem',
              marginTop: '1.25rem',
            }}
            alt="LinkedIn"
          />
        </a>
        
      </center>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    linkedinImg: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    githubImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
