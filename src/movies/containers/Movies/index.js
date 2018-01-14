import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getMovies } from '../../../movies/selectors';
import { createMovie } from '../../../movies/actions';
import { MoviesList } from '../../../movies/components';
import MoviesSearch from '../MoviesSearch';

export const Movies = props => (
  <React.Fragment>
    <h1>Movies List</h1>
    <MoviesSearch />
    <MoviesList {...props} />
  </React.Fragment>
);


export const mapStateToProps = state => ({
  movies: getMovies(state),
});

export const mapDispatchToProps = {
  createMovie,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.createMovie({
        title: 'xunda',
        description: 'test',
      });
    },
  }),
)(Movies);
