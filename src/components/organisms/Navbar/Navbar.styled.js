import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: ${({ isScrolledTop }) => (isScrolledTop ? null : '0 0 5px 5px rgb(28 15 25 / 10%);')};
  background-color: ${({ isScrolledTop }) => (isScrolledTop ? 'transparent' : 'white')};

  ${({ theme }) => theme.breakpoints.laptop} {
    padding: 0 40px;
  }

  .navbar {
    &__logo {
      width: 100px;
      ${({ theme }) => theme.breakpoints.laptop} {
        width: auto;
      }
    }

    &__menu {
      ${({ theme }) => theme.breakpoints.laptopDown} {
        position: fixed;
        width: 70%;
        left: 0;
        top: 0;
        height: 100vh;
        background: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        box-shadow: 0 0 5px 5px rgb(28 15 25 / 10%);
      }
    }

    &__auth-buttons {
      display: flex;
      /* flex-direction: column;

      ${({ theme }) => theme.breakpoints.laptop} {
        flex-direction: row;
      } */

      & > button,
      & > a > button {
        width: 90px;
        height: 35px;
        border-radius: 5px;
        margin-left: 10px;

        ${({ theme }) => theme.breakpoints.laptop} {
          width: 225px;
          height: 45px;
          margin-left: 20px;
        }
      }
    }

    &__register-button {
      background-color: ${({ theme }) => theme.colors.pink};
    }

    &__signin-button {
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    &__signout-button {
      background-color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export default StyledNavbar;
