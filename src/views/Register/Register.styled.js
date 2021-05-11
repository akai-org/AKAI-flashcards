import StyledContainer from 'components/molecules/Container/Container';
import styled from 'styled-components';

const StyledRegisterPage = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${StyledContainer} {
    margin: 60px auto;
  }

  .register {
    width: 500px;
    padding: 40px 80px;
    background-color: transparent;

    ${({ theme }) => theme.breakpoints.mobileLDown} {
      padding: 0 30px;
      border: none;
      background-color: initial;
    }

    &__form {
      display: flex;
      flex-direction: column;

      & > button {
        background-color: ${({ theme }) => theme.colors.primary};
        margin-top: 30px;
      }
    }

    &__c-buttons {
      padding-bottom: 20px;
      border-bottom: solid 1px ${({ theme }) => theme.colors.border};

      & > button {
        width: 100%;
        padding: 14px;
        margin-bottom: 20px;
      }
    }

    &__facebook-button {
      background-color: #375896;
    }

    &__google-button {
      background-color: #f2385a;
    }
  }
`;

export default StyledRegisterPage;
