import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { signInUser } from 'firebase/config/auth';
import propTypes from 'prop-types';
import * as Form from 'components/atoms/FormElements/FormElements';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import StyledContainer from 'components/molecules/Container/Container';
import useHandle from 'hooks/useHandle';
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
  const dispatch = useDispatch();
  const handleError = useHandle();

  const Asd = handleError();

  const onSubmit = async (data) => {
    try {
      const userData = await signInUser(data);
      if (userData) dispatch({ type: 'ADD_USER', payload: userData });
    } catch (error) {
      // error handling hook
      console.log(error);
      console.log(errors);
    }
  };

  const users = useSelector((state) => state.users);

  useEffect(() => {
    console.log(users);
  });

  return (
    <Container isVisible={isLoginPanelVisible}>
      <StyledLoginForm className="login" onSubmit={handleSubmit(onSubmit)}>
        <h2>Zaloguj się</h2>
        {Asd}
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
