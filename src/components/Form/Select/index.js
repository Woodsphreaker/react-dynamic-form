import React from "react";

const SelectOptions = ({ options = [] }) => {
  return options.map(({ label, value = "" }) => (
    <option key={value.toString()} value={value}>
      {label}
    </option>
  ));
};

const Select = ({ label = "", name = "", value = "", options, handleInputChange }) => {
  return (
    <>
      <label>{label}</label>
      <select value={value} name={name} onChange={handleInputChange}>
        {<SelectOptions options={options} />}
      </select>
    </>
  );
};

export default Select;
