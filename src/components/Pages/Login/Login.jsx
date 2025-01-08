import Background from '../../Background/Background';
import Name from '../../Login/Name';
import './Login.scss';

const Login = () => {
  return (
    <Background>
      <div className="login">
        <Name />
      </div>
    </Background>
  );
};

export default Login;
