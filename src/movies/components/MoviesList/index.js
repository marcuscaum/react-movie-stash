import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import { MoviesListItem } from '../';
import MoviesListStyled from './index.styled';

export const MoviesList = ({ movies }) => (
  <MoviesListStyled>
    {movies.valueSeq().map(movie => <MoviesListItem key={movie.get('id')} movie={movie} />)}
  </MoviesListStyled>
);

MoviesList.propTypes = {
  movies: PropTypes.instanceOf(Immutable.Map).isRequired,
};
