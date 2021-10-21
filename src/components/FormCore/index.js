import React from "react";
import FormSelector from "../FormSelector";

const FormCore = ({ formData, formState, handleInputChange }) => {
  if (!formData) {
    return null;
  }

  return formData.map(
    ({ inputType, label, name, placeholder, options, displayRule }) => (
      <FormSelector
        key={name}
        inputType={inputType}
        name={name}
        label={label}
        placeholder={placeholder}
        value={formState[name] || ""}
        options={options}
        displayRule={() => displayRule(formState)}
        handleInputChange={handleInputChange}
      />
    )
  );
};

export { FormCore };
