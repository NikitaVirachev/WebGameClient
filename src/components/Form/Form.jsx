import './Form.scss';

const Form = ({ children, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      {children}
    </form>
  );
};

export default Form;
