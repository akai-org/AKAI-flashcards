import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { getErrorMessege } from 'utils';
import { StyledCheckbox, StyledInput } from './FormElements.styled';

export const Input = forwardRef(({ type, name, errors }, ref) => {
  const errorMessege = getErrorMessege(name, errors);

  if (type !== 'password' && type !== 'email' && type !== 'text') return null;

  return (
    <StyledInput errorMessege={errorMessege}>
      <input type={type} name={name} id={name} placeholder=" " ref={ref || null} />
      <label htmlFor={name}>{name}</label>
      <div className="input-border" />
    </StyledInput>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  type: propTypes.string,
  name: propTypes.string.isRequired,
  errors: propTypes.objectOf(propTypes.shape),
};

Input.defaultProps = {
  type: 'text',
  errors: {},
};

// ----------------------------------------------------

export const Checkbox = forwardRef(({ name, children, errors }, ref) => {
  const errorMessege = getErrorMessege(name, errors);

  return (
    <StyledCheckbox htmlFor={name} errorMessege={errorMessege}>
      <span>{children}</span>
      <input type="checkbox" name={name} id={name} ref={ref || null} />
      <div className="b-input" />
    </StyledCheckbox>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  children: propTypes.node,
  errors: propTypes.objectOf(propTypes.shape),
};

Checkbox.defaultProps = {
  children: 'isChecked?',
  errors: {},
};
