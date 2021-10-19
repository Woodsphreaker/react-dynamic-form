import React from "react";

const Checkbox = ({ name = "", label = "", handleInputChange }) => {
  return <input type="checkbox" name={name} onChange={handleInputChange} />;
};

export default Checkbox;
