import Container from 'components/molecules/Container/Container';
import React from 'react';
import Button from 'components/atoms/Button/Button';
import RegisterForm from 'components/organisms/RegisterForm/RegisterForm';
import StyledRegisterPage from './Register.styled';

const Register = () => (
  <StyledRegisterPage>
    {/* <Logo /> */}
    <Container className="register">
      <div className="register__c-buttons">
        <Button className="register__facebook-button">Register with Facebook</Button>
        <Button className="register__google-button">Register with Google</Button>
      </div>
      <RegisterForm />
    </Container>
  </StyledRegisterPage>
);

Register.propTypes = {};

export default Register;
