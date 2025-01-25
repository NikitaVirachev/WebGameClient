import { useState } from 'react';
import Form from '../Form/Form';
import Button from '../Form/Button';
import InputText from '../Form/InputText';

const SignUp = ({ onAuthModeToggle }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const authInfo = { name, password, repeatPassword, email };

    console.log(authInfo);

    setName('');
    setPassword('');
    setRepeatPassword('');
    setEmail('');
  };

  return (
    <Form className="login-form" name="login" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="form__legend">Register</legend>
        <InputText
          id="name"
          name="user-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          Enter name:
        </InputText>
        <InputText
          id="email"
          name="user-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          Enter email:
        </InputText>
        <InputText
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          Enter passowrd:
        </InputText>
        <InputText
          id="repeat-password"
          name="repeat-password"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        >
          Repeat passowrd:
        </InputText>
        <Button type="submit">Sign Up</Button>
        <p>
          Already have an account?{' '}
          <a
            href="#"
            role="button"
            onClick={(e) => onAuthModeToggle(e)}
            className="form__link"
          >
            Log in
          </a>
        </p>
      </fieldset>
    </Form>
  );
};

export default SignUp;
