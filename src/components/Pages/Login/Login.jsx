import { useRef, useState } from 'react';
import Background from '../../Background/Background';
import Name from '../../Login/Name';
import Form from '../../Form/Form';
import LogIn from '../../Login/LogIn';
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
          <LogIn
            name={name}
            password={password}
            handleNameChange={(e) => setName(e.target.value)}
            handlePasswordChange={(e) => setPassword(e.target.value)}
          />
        </Form>
      </div>
    </Background>
  );
};

export default Login;
