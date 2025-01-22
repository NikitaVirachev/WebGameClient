import classes from './InputText.module.scss';

const InputText = ({ id, name, children }) => {
  return (
    <div className={classes.input__container}>
      <label htmlFor={id}>{children}</label>
      <input type="text" className={classes.input} name={name} id={id} />
    </div>
  );
};

export default InputText;
