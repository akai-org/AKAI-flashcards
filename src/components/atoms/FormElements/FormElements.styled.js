import styled from 'styled-components';

export const StyledInput = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  position: relative;

  & > input {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secon};
    width: 100%;
    height: 42px;
    outline: none;
    padding: 0 8px;
    font-size: 2rem;
    font-weight: 400;

    border: ${({ errorMessege }) => (errorMessege ? 'solid 3px red' : 'none')};
  }

  & > label {
    color: ${({ theme }) => theme.colors.darkFont};
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 2rem;
    font-weight: bold;
    display: block;
    transition: transform 0.1s linear, font-size 0.1s linear;
  }

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translate(-4px, -32px);
    font-size: 1.5rem;
  }

  & > div.input-border {
    display: ${({ errorMessege }) => (errorMessege ? 'none' : 'block')};

    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:after {
    content: '${({ errorMessege }) => errorMessege || null}';
    position: absolute;
    top: 110%;
    font-size: 1.2rem;
    color: red;
    right: 0;
  }
`;

export const StyledCheckbox = styled.label`
  margin-top: 20px;
  margin-bottom: 5px;
  position: relative;
  padding-left: 1.8rem;
  cursor: pointer;

  & *,
  & *::before,
  & *::after {
    box-sizing: content-box !important;
  }

  &:after {
    content: '${({ errorMessege }) => errorMessege || null}';
    position: absolute;
    left: 0;
    top: 110%;
    font-size: 1.2rem;
    color: red;
  }

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & span {
    display: inline-block;
    font-size: 1.3rem;
    font-family: inherit;
    transform: translate(8px, -2px);
  }

  & input[type='checkbox'] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.6rem;
    width: 1.6rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: solid 2px ${({ theme, errorMessege }) => (errorMessege ? 'red' : theme.colors.primary)};
    border-radius: 0.125rem;
  }

  & input[type='radio'] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 2rem;
  }

  & input[type='checkbox'] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.5rem;
    width: 0.5rem;
    height: 1rem;
    border: solid rgba(255, 255, 255, 1);
    border-width: 0 2px 2px 0;
    transition: background 250ms;
    transform: rotate(45deg);
  }

  & input[type='radio'] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.25rem;
    top: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 1);
    transition: background 250ms;
  }

  & input:disabled ~ .b-input::after {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  & input:checked ~ .b-input::after {
    display: block;
  }

  &:hover input ~ .b-input,
  & input:focus ~ .b-input {
    background: rgb(231, 238, 243);
  }

  & input:checked ~ .b-input {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  & input[type='checkbox']:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
    cursor: not-allowed;
  }

  & input[type='radio']:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
    cursor: not-allowed;
  }

  & input[type='radio']:disabled ~ .b-input::after {
    background: ${({ theme }) => theme.colors.primary};
  }

  & input:checked:focus ~ .b-input,
  &:hover input:not([disabled]):checked ~ .b-input {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  & .b-input::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    margin-left: -0.85rem;
    margin-top: -0.85rem;
    background: rgba(0, 130, 243, 1);
    border-radius: 2rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
  }

  @keyframes b-ripple {
    0% {
      transform: scale(0);
    }

    20% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  @keyframes b-ripple-duplicate {
    0% {
      transform: scale(0);
    }

    30% {
      transform: scale(1);
    }

    60% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;
