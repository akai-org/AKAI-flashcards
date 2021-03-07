import Container from 'components/molecules/Container/Container';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/vectors/Logo.svg';
import Button from 'components/atoms/Button/Button';

const StyledRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 100px 0;

  ${Container} {
    margin-top: 50px;
  }

  .register {
    &__form {
      display: flex;
      flex-direction: column;
      max-width: 467px;
      min-width: 320px;
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

const Register = () => (
  <StyledRegisterPage>
    <Logo />
    <Container className="register">
      <div className="register__c-buttons">
        <Button className="register__facebook-button">Register with Facebook</Button>
        <Button className="register__google-button">Register with Google</Button>
      </div>
      <form className="register__form">a</form>
    </Container>
  </StyledRegisterPage>
);

Register.propTypes = {};

export default Register;
