import classes from './InputText.module.scss';

const InputText = ({ id, name, type = 'text', value, onChange, children }) => {
  return (
    <p className={classes.input__container}>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        className={classes.input}
        name={name}
        id={id}
        onChange={onChange}
        required
        value={value}
      />
    </p>
  );
};

export default InputText;
