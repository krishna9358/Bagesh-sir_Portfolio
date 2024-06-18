import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => {
  

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            {data.link ? (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.title}
              </a>
            ) : (
              <span>{data.title}</span>
            )}
          </h3>
          <time className="published">{data.subtitle}</time>
        </header>
        {/* <div className="description">
          <p>{data.desc}</p>
        </div> */}
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
