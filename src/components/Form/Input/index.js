import React from "react";

const Input = ({
  label = "",
  name = "",
  value = "",
  handleInputChange,
  displayRule
}) => {
  console.log(name);
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
        onChange={handleInputChange}
      />
    </>
  );
};

export default Input;
