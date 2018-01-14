import React from 'react';
import PropTypes from 'prop-types';


export const MoviesSearchForm = ({ onChange }) =>
  <input type="text" name="title" onChange={onChange} placeholder="Type a movie name" />;

MoviesSearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

