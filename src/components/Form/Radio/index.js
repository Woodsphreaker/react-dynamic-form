import React from "react";

const Radio = ({ label = "", name = "", value = "", handleInputChange, options = [] }) => {
  return (
    <>
      <label>{label}</label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        {options.map(({ value: radioValue, label }) => (
          <div key={radioValue} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              value={radioValue}
              checked={radioValue === value}
              name={name}
              onChange={handleInputChange}
              id={label}
            />
            <label style={{ marginLeft: "10px" }} htmlFor={label}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Radio;
