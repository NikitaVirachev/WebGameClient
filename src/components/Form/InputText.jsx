import classes from './InputText.module.scss';

const InputText = ({ id, name, type = 'text', onChange, children }) => {
  return (
    <div className={classes.input__container}>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        className={classes.input}
        name={name}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
