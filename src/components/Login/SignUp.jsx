import Button from '../Form/Button';
import InputText from '../Form/InputText';

const SignUp = ({
  name,
  handleNameChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  repeatPassword,
  handleRepeatPasswordChange,
  onAuthModeToggle,
}) => {
  return (
    <>
      <InputText
        id="login-name"
        name="login"
        value={name}
        onChange={handleNameChange}
      >
        Enter name:
      </InputText>
      <InputText
        id="login-email"
        name="login"
        type="email"
        value={email}
        onChange={handleEmailChange}
      >
        Enter email:
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
      <InputText
        id="login-repeat-password"
        name="login"
        type="password"
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
      >
        Repeat passowrd:
      </InputText>
      <Button type="submit">Sign Up</Button>
      <p>
        Already have an account?{' '}
        <a
          href="#"
          role="button"
          onClick={(e) => onAuthModeToggle(e)}
          className="form__link"
        >
          Log in
        </a>
      </p>
    </>
  );
};

export default SignUp;
