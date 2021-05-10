import styled from 'styled-components';

const StyledLoginForm = styled.form`
  width: auto;
  margin: 0 10px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.mobileL} {
    width: 300px;
  }

  .login {
    &__button {
      height: 27px;
      width: 204px;
      font-size: 2rem;
    }
  }
`;

export default StyledLoginForm;
