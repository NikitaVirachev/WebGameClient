import './Form.scss';

const Form = ({ children, onSubmit, className, name }) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`} name={name}>
      {children}
    </form>
  );
};

export default Form;
