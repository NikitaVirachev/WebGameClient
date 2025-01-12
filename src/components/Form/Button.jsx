import './Button.scss';

const Button = ({ children, type }) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

export default Button;
