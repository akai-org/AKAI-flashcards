import React from 'react';
import propTypes from 'prop-types';
import { StyledCheckbox, StyledInput } from './FormElements.styled';

export const Input = ({ type, name }) => {
  if (type !== 'password' && type !== 'email' && type !== 'text') return null;

  return (
    <StyledInput>
      <input type={type} name={name} id={name} placeholder=" " />
      <label htmlFor={name}>{name}</label>
      <div className="input-border" />
    </StyledInput>
  );
};

Input.propTypes = {
  type: propTypes.string,
  name: propTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

// ----------------------------------------------------

export const Checkbox = ({ name, children }) => (
  <StyledCheckbox for={name}>
    <span>{children}</span>
    <input type="checkbox" name={name} id={name} />
    <div className="b-input" />
  </StyledCheckbox>
);

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  children: propTypes.node,
};

Checkbox.defaultProps = {
  children: 'isChecked?',
};
