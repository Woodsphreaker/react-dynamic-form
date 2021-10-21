import React from "react";

const Input = ({
  label = "",
  name = "",
  value = "",
  placeholder = "",
  handleInputChange,
  displayRule,
}) => {
  if (!displayRule()) {
    return null;
  }

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Input;
