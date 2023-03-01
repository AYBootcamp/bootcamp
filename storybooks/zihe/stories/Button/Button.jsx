import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ backgroundColor, size, label, padding, ...props }) => {
  return (
    <button type="button"
      style={{ backgroundColor, padding }}
      {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};