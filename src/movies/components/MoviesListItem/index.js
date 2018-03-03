import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { withState } from 'recompose';
import { GridTile } from 'material-ui/GridList';


export const MoviesListItem = ({ movie, imageIsLoaded, image }) => (
  <GridTile
    title={movie.get('original_title')}
    subtitle={<p>{movie.get('overview')}</p>}
    style={image ? {} : { display: 'none' }}
    titleBackground="black"
  >
    <img
      alt="poster"
      onLoad={() => imageIsLoaded(true)}
      src={`http://image.tmdb.org/t/p/w185/${movie.get('poster_path')}`}
    />
  </GridTile>
);

MoviesListItem.propTypes = {
  movie: PropTypes.instanceOf(Immutable.Record).isRequired,
  imageIsLoaded: PropTypes.func.isRequired,
  image: PropTypes.bool.isRequired,
};

export default withState('image', 'imageIsLoaded', false)(MoviesListItem);
