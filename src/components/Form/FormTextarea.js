import React from 'react';
import { FormGroup, FormLabel, Textarea } from '../../Styles/Form';

const FormTextarea = props => {
  const { label, name } = props;
  return (
    <FormGroup>
      {label && label.length > 0 && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Textarea as="textarea" {...props} id={name} rows="6" />
    </FormGroup>
  );
};

export default FormTextarea;
