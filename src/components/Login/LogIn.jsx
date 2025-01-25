import { useState } from 'react';
import Form from '../Form/Form';
import Button from '../Form/Button';
import InputText from '../Form/InputText';

const LogIn = ({ onAuthModeToggle }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const authInfo = { name, password };

    console.log(authInfo);

    setName('');
    setPassword('');
  };

  return (
    <Form className="login-form" name="login" onSubmit={handleSubmit}>
      <InputText
        id="login-name"
        name="login"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        Enter name:
      </InputText>
      <InputText
        id="login-password"
        name="login"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        Enter passowrd:
      </InputText>
      <Button type="submit">Log In</Button>
      <p>
        Don`&apos;`t have an account?{' '}
        <a
          href="#"
          role="button"
          onClick={(e) => onAuthModeToggle(e)}
          className="form__link"
        >
          Sign up
        </a>
      </p>
    </Form>
  );
};

export default LogIn;
