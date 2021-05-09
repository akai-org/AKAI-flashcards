import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
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
  const [, setCookie] = useCookies();
  const dispatch = useDispatch();
  const handle = useHandle();

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const userData = await signInUser(data);
      if (userData) {
        setCookie('uid', userData.uid);
        handle('signed in', 'success');
        dispatch({ type: 'ADD_USER', payload: userData });
        history.push('/panel');
      }
    } catch (error) {
      handle(error, 'error');
    }
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
