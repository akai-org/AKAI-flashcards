import React from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import * as Form from 'components/atoms/FormElements/FormElements';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import StyledContainer from 'components/molecules/Container/Container';
import StyledLoginForm from './LoginForm.styled';

const Container = styled(StyledContainer)`
  position: absolute;
  top: calc(100% - 5px);

  .login {
    &__button {
      margin: 30px auto 0;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const LoginForm = ({ isLoginPanelVisible }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container isVisible={isLoginPanelVisible}>
      <StyledLoginForm className="login" onSubmit={handleSubmit(onSubmit)}>
        <h2>Zaloguj się</h2>
        <Form.Input name="email" type="email" ref={register({})} errors={errors} />
        <Form.Input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 7, maxLength: 20 })}
          errors={errors}
        />
        <Button width="225px" height="36px" radius="27px" type="submit" className="login__button">
          Sign in
        </Button>
      </StyledLoginForm>
    </Container>
  );
};

LoginForm.propTypes = {
  isLoginPanelVisible: propTypes.bool.isRequired,
};

export default LoginForm;