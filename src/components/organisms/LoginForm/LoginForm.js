import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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
  right: 0;
  top: 100px;
  width: 90%;
  transform: translateX(-5%);

  ${({ theme }) => theme.breakpoints.mobileL} {
    top: calc(100% - 5px);
    transform: translateX(-55%);
    right: auto;
    width: auto;
  }

  ${({ theme }) => theme.breakpoints.laptop} {
    transform: translateX(-5%);
  }

  .login {
    &__button {
      margin: 30px auto 0;
      background: ${({ theme }) => theme.colors.primary};
    }

    &__close-button {
      position: absolute;
      right: 10px;
      top: 5px;
      background: none;
      font-size: 2.4rem;
    }
  }
`;

const LoginForm = ({ isLoginPanelVisible, setLoginVisible }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const handle = useHandle();

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const userData = await signInUser(data);
      if (userData) {
        handle('signed in', 'success');
        dispatch({ type: 'ADD_USER', payload: userData });
        history.push('/panel');
      }
    } catch (error) {
      handle(error, 'error');
    }
  };

  return (
    <Container isVisible={isLoginPanelVisible} setVisibility={setLoginVisible} type="transitioned">
      <StyledLoginForm className="login" onSubmit={handleSubmit(onSubmit)}>
        <button
          onClick={() => setLoginVisible(false)}
          type="button"
          className="login__close-button"
          aria-label="close login modal"
        >
          x
        </button>
        <h2>Sign in</h2>
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
  setLoginVisible: propTypes.func.isRequired,
  isLoginPanelVisible: propTypes.bool.isRequired,
};

export default LoginForm;
