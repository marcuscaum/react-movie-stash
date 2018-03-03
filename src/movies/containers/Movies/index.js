import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import PropTypes from 'prop-types';

import { LoadingComponent } from '../../../shared/components/LoadingComponent';

import { getMoviesList } from '../../selectors';
import { createMovie, setMoviesList } from '../../actions';
import { MoviesList } from '../../components';
import MoviesSearch from '../MoviesSearch';
import { AppBarStyled } from './index.styled';


const Movies = props => (
  <React.Fragment>
    <AppBarStyled
      title="Movies"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonClick={() => props.handleToggle(!props.toggle)}
    >
      <MoviesSearch {...props} />
    </AppBarStyled>
    <MoviesList {...props} />
  </React.Fragment>
);

Movies.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

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
