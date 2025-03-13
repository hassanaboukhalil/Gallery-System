const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  classes,
  // isRequired,
}) => {
  return label ? (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${classes}`}
      />
    </div>
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${classes}`}
    />
  );
};

export default Input;
