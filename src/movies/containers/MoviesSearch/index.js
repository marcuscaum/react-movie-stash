import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { MoviesSearchForm } from '../../components';

export const MoviesSearch = props => <MoviesSearchForm {...props} />;

export default compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: ({ updateValue }) => event => {
      updateValue(event.target.value);
    },
    onSubmit: ({ value }) => event => {
      event.preventDefault();
      console.log(value);
    },
  }),
)(MoviesSearch);
