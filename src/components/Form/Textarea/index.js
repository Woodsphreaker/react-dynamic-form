import React from "react";

const Textarea = ({ label = "", name = "", value = "", handleInputChange }) => (
  <>
    <label>{label}</label>
    <textarea name={name} value={value} onChange={handleInputChange} />
  </>
);

export default Textarea;
