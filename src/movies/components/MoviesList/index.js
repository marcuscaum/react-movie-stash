import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import { MoviesListItem } from '../';
import StyledGridList from './styles/StyledGridList';

export const MoviesList = ({ movies }) => (
  <StyledGridList
    cellHeight={180}
  >
    {movies.valueSeq().map(movie => <MoviesListItem key={movie.get('id')} movie={movie} />)};
  </StyledGridList>
);

MoviesList.propTypes = {
  movies: PropTypes.instanceOf(Immutable.Map).isRequired,
};
