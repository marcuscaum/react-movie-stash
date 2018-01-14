import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

export const MoviesListItem = ({ movie }) => (
  <div>
    <h1>{movie.get('title')}</h1>
    <p>{movie.get('description')}</p>
  </div>
);

MoviesListItem.propTypes = {
  movie: PropTypes.instanceOf(Immutable.Record).isRequired,
};
