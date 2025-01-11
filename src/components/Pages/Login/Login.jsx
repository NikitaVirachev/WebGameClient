import { useRef } from 'react';
import Background from '../../Background/Background';
import Name from '../../Login/Name';
import './Login.scss';

const Login = () => {
  const loginRef = useRef(null);

  return (
    <Background>
      <div className="login" ref={loginRef}>
        <Name name="The First Game" parentElement={loginRef} />
      </div>
    </Background>
  );
};

export default Login;
