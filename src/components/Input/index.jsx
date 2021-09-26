//-----------------Basic imports------------------------
import React from "react";
import "./Input.scss";

const Input = ({
  label,
  placeholder,
  error,
  value,
  type = "text",
  onChange = () => {},
  formHelper,
  name,
  minValue,
}) => {
  //-----------------Handlers------------------------

  const changeHandler = (e) =>
    formHelper ? onChange(e) : onChange(e.target.value);

  //-----------------Layout-----------------------

  return (
    <div className="input">
      {label && <span className="input__label">{label}</span>}
      <input
        value={value}
        name={name}
        onChange={changeHandler}
        type={type}
        min={minValue}
        placeholder={placeholder}
      />
      {error && <p className="input__error"></p>}
    </div>
  );
};

export default Input;
