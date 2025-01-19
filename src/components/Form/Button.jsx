import './Button.scss';

const Button = ({ children, type }) => {
  return (
    <button type={type} className="button">
      {children}
      <div className="pixelart-to-css"></div>
    </button>
  );
};

export default Button;
