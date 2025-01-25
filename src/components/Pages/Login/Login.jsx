import { useRef, useState } from 'react';
import Background from '../../Background/Background';
import Name from '../../Login/Name';
import LogIn from '../../Login/LogIn';
import SignUp from '../../Login/SignUp';
import './Login.scss';

const Login = () => {
  const [isAuthMode, setIsAuthMode] = useState(true);
  const loginRef = useRef(null);

  const handleAuthModeToggle = (event) => {
    event.preventDefault();

    setIsAuthMode((prev) => !prev);
  };

  return (
    <Background>
      <div className="login" ref={loginRef}>
        <Name name="The First Game" parentElement={loginRef} />

        {isAuthMode && <SignUp onAuthModeToggle={handleAuthModeToggle} />}
        {!isAuthMode && <LogIn onAuthModeToggle={handleAuthModeToggle} />}
      </div>
    </Background>
  );
};

export default Login;
