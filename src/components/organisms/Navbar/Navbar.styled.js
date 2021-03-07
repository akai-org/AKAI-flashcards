import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 25px 5px rgb(28 15 25 / 25%);

  .navbar {
    &__auth-buttons {
      display: flex;

      & button {
        margin-left: 20px;
        width: 225px;
        border-radius: 15px;
        height: 45px;
      }
    }

    &__register-button {
      background-color: ${({ theme }) => theme.colors.pink};
    }

    &__signin-button {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default StyledNavbar;
