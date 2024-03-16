import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{data.title}<h2>{data.year}</h2></h3>
        <p>{data.college}</p>
        <p><b>Principal Investigator(s) and Co-Investigator(s):</b> {data.under}</p>
        <p>
          <b>
            Implementing Institution(s) and other collaborating Institution(s):
          </b> {data.other[0]} <br /> {data.other[1]}
        </p>
        <p><b>Status:</b> {data.status}</p>
      </header>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    under: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
