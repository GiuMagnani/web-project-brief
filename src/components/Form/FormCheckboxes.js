import React from "react";
import { FormGroup, Input, FormLabel } from "../../Styles/Form";
import styled from "styled-components";

export default props => {
  const { label, name, options } = props;

  return (
    <FormGroup>
      {label && label.length > 0 && (
        <FormLabel htmlFor={name}>{label}</FormLabel>
      )}
      {options.map(option => (
        <FormCheckbox option={option} />
      ))}
      <Input {...props} id={name} />
    </FormGroup>
  );
};

const FormCheckbox = props => {
  const { label } = props;
  return (
    <CheckboxWrapper>
      <input {...props} checked={props.value} />
      {label && label.length > 0 && (
        <label htmlFor={props.name}>
          <CheckboxContainer
            className={props.value ? "isChecked" : ""}
            tabIndex="0"
          >
            {/*<Icon name="check" />*/}X
          </CheckboxContainer>
          <span>{label}</span>
        </label>
      )}
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  label {
    cursor: pointer;
  }

  input {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  span {
    user-select: none;
  }

  margin-bottom: 1rem;

  // @media (min-width: ${props => props.theme.lg}) {
  //   height: 101px;
  //   line-height: 107px;
  // }
`;

const CheckboxContainer = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  top: 7px;
  margin-right: 1rem;
  color: transparent;
  border: 1px solid ${props => props.theme.main};
  transition: background-color 0.25s ease-out;
  outline: 0;

  &.isChecked {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.secondary};
  }

  .icon-wrapper {
    width: 20px;
    height: 30px;
    position: relative;
    line-height: normal;
  }

  svg {
    position: absolute;
    top: -2px;
    left: 0;
    height: 30px;
    width: 20px;
    fill: white;
  }
`;
