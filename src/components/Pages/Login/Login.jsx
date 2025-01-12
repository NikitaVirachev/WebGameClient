import { useRef } from 'react';
import Background from '../../Background/Background';
import Name from '../../Login/Name';
import Form from '../../Form/Form';
import Button from '../../Form/Button';
import './Login.scss';

const Login = () => {
  const loginRef = useRef(null);

  return (
    <Background>
      <div className="login" ref={loginRef}>
        <Name name="The First Game" parentElement={loginRef} />
        <Form className="login-form">
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    </Background>
  );
};

export default Login;
