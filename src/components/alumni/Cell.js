import React from 'react';
import PropTypes from 'prop-types';


const Cell = ({ data }) => {
  const nameStyle ={
   padding: 0, margin: 0 ,display:'grid',gridTemplateColumns: '80% 20%',justifyItems:'end'
  }
  const { link, name, work, intern, education, linkedin, linkedinImg, github, githubImg } = data;

  const experience = work || (intern && intern.length > 0) ? (work || intern) : education;

  return (
    <div className="cell-container" style={{ margin: '0.78125rem', width: 'fit-content' }}>
      <article className="mini-post" style={{ width: 'fit-content' }}>
        <header style={{ maxWidth: '15.625rem', maxHeight: '15.625rem', overflow: 'hidden', display: 'flex', padding: '0.625rem' }}>
          <img
            src={link}
            alt={name}
            style={{
              width: '14.375rem',
              height: '14.375rem',
              border: '0.3125rem solid grey',
              padding: '0.3125rem',
            }}
          />
        </header>
        <h3 style={nameStyle}> 
       {name}  
       <a href={linkedin} style={{justifyItems:'center',width:'100%'}} target="_blank" rel="noreferrer">
            <img
              src={linkedinImg}
              style={{ width: '1.25rem', height: '1.25rem',  }}
              alt="LinkedIn"
            />
          </a>
          </h3>
        <center><h5 style={{ padding: 0, margin: 0 }}>{experience}</h5></center>
        
          
        
       
      </article>
    </div>
  );
};

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
