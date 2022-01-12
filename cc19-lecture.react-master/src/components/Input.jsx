import React from 'react';

const Input = (props) => {
  const {
    className,
    label,
    labelName,
    placeholder,
    onChange,
    value,
  } = props;

  const classes = "input-field" + className || "";

  return (
    <div className={classes}>
      <label htmlFor={label}>{labelName}</label>
      <input
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}>
      </input>
    </div>
  );
}

Input.defaultProps = {
  className: "",
  label: "",
  labelName: "",
  placeholder: "",
  onChange: () => {},
  value: undefined,
}

export default Input;
