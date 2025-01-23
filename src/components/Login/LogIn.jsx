import Button from '../Form/Button';
import InputText from '../Form/InputText';

const LogIn = ({ name, handleNameChange, password, handlePasswordChange }) => {
  return (
    <>
      <InputText
        id="login-name"
        name="login"
        type="text"
        value={name}
        onChange={handleNameChange}
      >
        Enter name:
      </InputText>
      <InputText
        id="login-password"
        name="login"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      >
        Enter passowrd:
      </InputText>
      <Button type="submit">Log In</Button>
    </>
  );
};

export default LogIn;
