import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';

import { LoadingComponent } from '../../../shared/components/LoadingComponent';

import { getMoviesList } from '../../selectors';
import { createMovie, setMoviesList } from '../../actions';
import { MoviesList } from '../../components';
import MoviesSearch from '../MoviesSearch';


export const Movies = props => (
  <React.Fragment>
    <h1>Movies List</h1>
    <MoviesSearch {...props} />
    <MoviesList {...props} />
  </React.Fragment>
);


export const mapStateToProps = state => ({
  movies: getMoviesList(state),
});

export const mapDispatchToProps = {
  createMovie,
  setMoviesList,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(
    ({ movies }) => !movies,
    renderComponent(LoadingComponent),
  ),
)(Movies);
