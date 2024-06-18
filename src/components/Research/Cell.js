import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => {
  const handleClick = (event) => {
    if (data.link) {
      window.open(data.link, '_blank');
    }
  };

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
                onClick={handleClick} // Call handleClick when title is clicked
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
