import { useState } from 'react';
import Form from '../Form/Form';
import Button from '../Form/Button';
import InputText from '../Form/InputText';

const LogIn = ({ onAuthModeToggle }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const authInfo = { name, password };

      const response = await fetch('/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authInfo),
      });

      console.log(response);

      setName('');
      setPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form className="login-form" name="login" onSubmit={handleSubmit}>
      <h2>Log In</h2>

      <section className="form__inputs">
        <InputText
          id="name"
          name="user-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          Enter name:
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
      </section>

      <section className="form__actions">
        <Button type="submit">Log In</Button>
        <p>
          Don&apos;t have an account?{' '}
          <a
            href="#"
            role="button"
            onClick={(e) => onAuthModeToggle(e)}
            className="form__link"
          >
            Sign up
          </a>
        </p>
      </section>
    </Form>
  );
};

export default LogIn;
