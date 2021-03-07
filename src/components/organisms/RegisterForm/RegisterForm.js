import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as Form from 'components/atoms/FormElements/FormElements';
import Button from 'components/atoms/Button/Button';

const RegisterForm = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateWhetherPasswordsAreMatched = (value) => value === password.current || 'noMatched';

  const pattern = /^\S*$/;

  return (
    <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        name="email"
        type="email"
        ref={register({ required: true, pattern })}
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
