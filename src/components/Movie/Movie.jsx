import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ Poster, Title, Year }) => (
  <div className="card">
    <img className="card-img-top" src={Poster} alt="Movie Poster" />

    <div className="card-body">
      <h6 className="mb-0 text-center">
        {Title}
        <span className="ml-1 small">
          (
          {Year}
          )
        </span>
      </h6>
    </div>
  </div>
);

Movie.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
};

export default Movie;
