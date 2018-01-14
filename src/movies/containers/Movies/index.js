import React from 'react';
import { connect } from 'react-redux';

import { getMovies } from 'src/movies/selectors';

export const Movies = props => {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Movies List</h1>
    </React.Fragment>
  );
};

export const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps, {})(Movies);
