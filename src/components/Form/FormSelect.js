import React from "react";
import { FormGroup, Select, FormLabel } from "../../Styles/Form";

const FormSelect = props => {
  const { label, name, options } = props;
  return (
    <FormGroup>
      { label && label.length > 0 && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Select as="select" {...props} id={name}>
        <option disabled value="select">Choose an option</option>
        {options && options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </Select>
    </FormGroup>
  );
};

export default FormSelect;
