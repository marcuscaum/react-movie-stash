import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export const MoviesSearchForm = ({ onChange }) => (
  <TextField
    floatingLabelText="Search for a movie"
    onChange={onChange}
    fullWidth
    floatingLabelStyle={{
      color: 'tomato',
    }}
    underlineFocusStyle={{
      borderColor: 'tomato',
    }}
  />
);

MoviesSearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

