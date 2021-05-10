import React from 'react';
import theme from 'style/theme';
import propTypes from 'prop-types';
import StyledUnderlined from './Underlined.styled';

const Underlined = ({ children, color }) => (
  <StyledUnderlined color={color}>
    {children} <div className="underline-block" />
  </StyledUnderlined>
);

Underlined.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
  color: propTypes.string,
};

Underlined.defaultProps = {
  color: theme.colors.pink,
};

export default Underlined;
