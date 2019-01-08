import React from "react";
import { FormGroup, Input, FormLabel, InputPrefix } from "../../Styles/Form";

const FormInput = props => {
  const { label, name } = props;
  return (
    <FormGroup>
      { label && label.length > 0 && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input {...props} id={name} />
    </FormGroup>
  );
};

export default FormInput;
