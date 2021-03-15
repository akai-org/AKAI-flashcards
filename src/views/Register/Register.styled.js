import StyledContainer from 'components/molecules/Container/Container';
import styled from 'styled-components';

const StyledRegisterPage = styled.main`
  height: 100%;
  width: 100%;

  ${StyledContainer} {
    margin: 60px auto;
  }

  .register {
    width: 500px;
    /* padding: 0 100px; */

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
