import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { MoviesSearchForm } from '../../components';
import { findMovie } from '../../api/actions';

export const MoviesSearch = props => <MoviesSearchForm {...props} />;

export default compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: ({ updateValue }) => event => {
      updateValue(event.target.value);
    },
    onSubmit: ({ value }) => async event => {
      event.preventDefault();
      const lo = await findMovie({
        query: value,
      });
    },
  }),
)(MoviesSearch);
