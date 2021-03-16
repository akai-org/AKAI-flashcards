import styled from 'styled-components';

const StyledLoginForm = styled.form`
  width: 300px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;

  .login {
    &__button {
      height: 27px;
      width: 204px;
      font-size: 2rem;
    }
  }
`;

export default StyledLoginForm;
