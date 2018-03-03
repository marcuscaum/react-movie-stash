import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { withState } from 'recompose';


import MoviesListItemStyled from './index.styled';

export const MoviesListItem = ({ movie, imageIsLoaded, image }) => (
  <MoviesListItemStyled
    title={image.toString()}
    subtitle={<p>{movie.get('description')}</p>}
    image={image ? 1 : 0}
  >
    {movie.get('poster_path') &&
      <img
        alt="poster"
        onLoad={() => imageIsLoaded(true)}
        src={`http://image.tmdb.org/t/p/w185/${movie.get('poster_path')}`}
      />
    }
  </MoviesListItemStyled>
);

MoviesListItem.propTypes = {
  movie: PropTypes.instanceOf(Immutable.Record).isRequired,
  imageIsLoaded: PropTypes.func.isRequired,
  image: PropTypes.bool.isRequired,
};

export default withState('image', 'imageIsLoaded', false)(MoviesListItem);
