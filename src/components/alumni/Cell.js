import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data, bgColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const nameStyle = {
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    justifyItems: 'end'
  };

  const { link, name, work, intern, education, linkedin, linkedinImg, github, githubImg } = data;

  const experience = work || (intern && intern.length > 0) ? (work || intern) : education;

  const truncateText = (text, maxLines = 2) => {
    const lineHeight = 1.2; // Adjust according to your font-size and line-height
    const maxHeight = `${maxLines * lineHeight}rem`;
    return {
      maxHeight,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
    };
  };

  const shouldShowExpandIcon = experience.length > 150;

  return (
    <div className="cell-container" style={{ margin: '0.78125rem', width: 'fit-content', backgroundColor: bgColor }}>
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
          <a href={linkedin} style={{ justifyItems: 'center', width: '100%' }} target="_blank" rel="noreferrer">
            <img
              src={linkedinImg}
              style={{ width: '1.25rem', height: '1.25rem' }}
              alt="LinkedIn"
            />
          </a>
        </h3>
        <center>
          <h5
            style={{ ...truncateText(experience), padding: 0, margin: 0 }}
            onClick={shouldShowExpandIcon ? toggleExpand : undefined} // Only allow expanding if experience is longer than 150 characters
          >
            {experience}
            {shouldShowExpandIcon && !isExpanded && <span style={{ fontWeight: 'bold' }}>⮟</span>}
          </h5>
        </center>
        {isExpanded && (
          <div>
            <h5 style={{ whiteSpace: 'pre-wrap', padding: 0, margin: 0 }}>
              {experience}
            </h5>
          </div>
        )}
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
    work: PropTypes.string,
    intern: PropTypes.string,
  }).isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Cell;
