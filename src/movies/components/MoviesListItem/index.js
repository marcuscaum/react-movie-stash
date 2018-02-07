import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { GridTile } from 'material-ui/GridList';

export const MoviesListItem = ({ movie }) => (
  <GridTile
    title={movie.get('title')}
    subtitle={<p>{movie.get('description')}</p>}
  >
    {movie.get('poster_path') &&
      <img
        alt="poster"
        src={`http://image.tmdb.org/t/p/w185/${movie.get('poster_path')}`}
      />
    }
  </GridTile>
);

MoviesListItem.propTypes = {
  movie: PropTypes.instanceOf(Immutable.Record).isRequired,
};
