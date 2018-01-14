import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import { MoviesListItem } from '../';

export const MoviesList = ({ movies }) => movies.map(movie => <MoviesListItem key={movie.get('id')} movie={movie} />);

MoviesList.propTypes = {
  movies: PropTypes.instanceOf(Immutable.List).isRequired,
};