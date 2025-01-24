import { useRef, useState } from 'react';
import Background from '../../Background/Background';
import Name from '../../Login/Name';
import Form from '../../Form/Form';
import LogIn from '../../Login/LogIn';
import SignUp from '../../Login/SignUp';
import './Login.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isAuthMode, setIsAuthMode] = useState(true);
  const loginRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const authInfo = { name, password };

    console.log(authInfo);

    setName('');
    setPassword('');
    setRepeatPassword('');
    setEmail('');
  };

  const handleAuthModeToggle = (event) => {
    event.preventDefault();

    setIsAuthMode((prev) => !prev);
  };

  return (
    <Background>
      <div className="login" ref={loginRef}>
        <Name name="The First Game" parentElement={loginRef} />
        <Form className="login-form" name="login" onSubmit={handleSubmit}>
          {isAuthMode && (
            <SignUp
              name={name}
              email={email}
              password={password}
              repeatPassword={repeatPassword}
              handleNameChange={(e) => setName(e.target.value)}
              handlePasswordChange={(e) => setPassword(e.target.value)}
              handleEmailChange={(e) => setEmail(e.target.value)}
              handleRepeatPasswordChange={(e) =>
                setRepeatPassword(e.target.value)
              }
              onAuthModeToggle={handleAuthModeToggle}
            />
          )}
          {!isAuthMode && (
            <LogIn
              name={name}
              password={password}
              handleNameChange={(e) => setName(e.target.value)}
              handlePasswordChange={(e) => setPassword(e.target.value)}
              onAuthModeToggle={handleAuthModeToggle}
            />
          )}
        </Form>
      </div>
    </Background>
  );
};

export default Login;
