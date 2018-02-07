import { compose, withHandlers } from 'recompose';

import { MoviesSearchForm } from '../../components';
import { findMovie } from '../../api/actions';

export default compose(
  withHandlers({
    onChange: ({ setMoviesList }) => async event => {
      if (event.target.value.length === 0) {
        setMoviesList({});
        return;
      }
      const movieslist = await findMovie({
        query: event.target.value,
      });
      setMoviesList(movieslist);
    },
  }),
)(MoviesSearchForm);
