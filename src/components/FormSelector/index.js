import React, { memo } from "react";

import Input from "../Form/Input";
import Select from "../Form/Select";
import Textarea from "../Form/Textarea";
import Checkbox from "../Form/Checkbox";
import Radio from "../Form/Radio";

const FormSelector = ({ inputType, ...props }) => {

  const inputTypes = {
    inputText: Input,
    dropdown: Select,
    textarea: Textarea,
    radio: Radio,
    checkbox: Checkbox
  };

  const FormComponent = inputTypes[inputType];

  return <FormComponent {...props} />;
};

export default memo(FormSelector);
