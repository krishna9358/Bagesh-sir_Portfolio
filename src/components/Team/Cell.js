import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container" style={{ margin: '8px' }}>
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
                  border: '5px solid grey',
                  padding: '5px',
                }
            }
        />
      </header>
      <center><h3 style={{ padding: '0px', margin: '0px' }}>{data.name}</h3></center>
      <center><h5 style={{ padding: '0px', margin: '0px' }}>{data.education}</h5></center>
      <center><a href={data.linkedin} target='_blank'><img src={data.linkedinImg} style={{width: '20px',height: '20px', marginRight : '10px', marginTop : '20px'}} /></a>
      <a href={data.github} target='_blank'><img src={data.githubImg} style={{width: '20px',height: '20px'}} /></a></center>
      
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
