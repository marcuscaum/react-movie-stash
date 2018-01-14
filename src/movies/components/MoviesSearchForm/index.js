import React from 'react';
import PropTypes from 'prop-types';


export const MoviesSearchForm = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="title" onChange={onChange} />
    <button type="submit">
      Submit
    </button>
  </form>
);

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

