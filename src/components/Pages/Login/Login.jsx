import { useRef, useState } from 'react';
import Background from '../../Background/Background';
import Name from '../../Login/Name';
import Form from '../../Form/Form';
import Button from '../../Form/Button';
import InputText from '../../Form/InputText';
import './Login.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const authInfo = { name, password };

    console.log(authInfo);

    setName('');
    setPassword('');
  };

  return (
    <Background>
      <div className="login" ref={loginRef}>
        <Name name="The First Game" parentElement={loginRef} />
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
        </Form>
      </div>
    </Background>
  );
};

export default Login;
