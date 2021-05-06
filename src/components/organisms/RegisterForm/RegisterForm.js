import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Form from 'components/atoms/FormElements/FormElements';
import Button from 'components/atoms/Button/Button';
import { registerUser } from 'firebase/config/auth';
import { useDispatch } from 'react-redux';
import useHandle from 'hooks/useHandle';

const RegisterForm = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const handle = useHandle();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data) => {
    try {
      const userData = await registerUser(data);
      handle('registered in', 'success');
      if (userData) dispatch({ type: 'ADD_USER', payload: userData });
    } catch (error) {
      handle(error, 'error');
      // error handling hook
    }
  };

  const pattern = /^\S*$/;
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateWhetherPasswordsAreMatched = (value) => value === password.current;

  useEffect(() => {
    console.log(errors);
  });

  return (
    <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        name="email"
        type="email"
        ref={register({
          required: true,
          pattern: { value: emailPattern, message: 'wrong e-mail' },
        })}
        errors={errors}
      />
      <Form.Input
        name="password"
        type="password"
        ref={register({
          required: true,
          minLength: 7,
          maxLength: 20,
          pattern,
        })}
        errors={errors}
      />
      <Form.Input
        name="confirm"
        type="password"
        ref={register({
          required: true,
          minLength: 7,
          maxLength: 20,
          pattern,
          validate: validateWhetherPasswordsAreMatched,
        })}
        errors={errors}
      />
      <Form.Checkbox name="policy-constent" ref={register({ required: true })} errors={errors}>
        Agreed with Flashcard Policy Privacy
      </Form.Checkbox>
      <Form.Checkbox name="marketing-constent" ref={register}>
        Agreed with Mailing marketing
      </Form.Checkbox>

      <Button width="100%" height="54px" radius="27px" type="submit">
        Join Flashcards!
      </Button>
    </form>
  );
};

export default RegisterForm;
