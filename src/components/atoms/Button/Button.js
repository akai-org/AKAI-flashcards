import React from 'react';
import propTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ children, width, height, radius, className, type, ...props }) => (
  <StyledButton
    {...props}
    type={type}
    width={width}
    height={height}
    radius={radius}
    className={className}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
  width: propTypes.string,
  height: propTypes.string,
  radius: propTypes.string,
  className: propTypes.string,
  type: propTypes.string,
};

Button.defaultProps = {
  width: null,
  height: null,
  radius: null,
  className: null,
  type: 'button',
};

export default Button;
