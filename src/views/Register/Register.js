import Container from 'components/molecules/Container/Container';
import React from 'react';
// import { ReactComponent as Logo } from 'assets/vectors/Logo.svg';
import Button from 'components/atoms/Button/Button';
import * as Form from 'components/atoms/FormElements/FormElements';
import StyledRegisterPage from './Register.styled';

const Register = () => (
  <StyledRegisterPage>
    {/* <Logo /> */}
    <Container className="register">
      <div className="register__c-buttons">
        <Button className="register__facebook-button">Register with Facebook</Button>
        <Button className="register__google-button">Register with Google</Button>
      </div>
      <form className="register__form">
        <Form.Input name="email" type="email" />
        <Form.Input name="password" type="password" />
        <Form.Input name="confirm password" type="password" />
        <Form.Checkbox name="policy-constent">Agreed with Flashcard Policy Privacy</Form.Checkbox>
        <Form.Checkbox name="marketing-constent">Agreed with Mailing marketing</Form.Checkbox>

        <Button width="100%" height="54px" radius="27px">
          Join Flashcards!
        </Button>
      </form>
    </Container>
  </StyledRegisterPage>
);

Register.propTypes = {};

export default Register;
