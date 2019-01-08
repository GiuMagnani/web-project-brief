import styled from "styled-components";

const Input = styled.input`
  background: #ffffff;
  border: 1px solid ${props => props.theme.grey2};
  height: 50px;
  width: 100%;
  border-radius: 4px;
  padding: 0 15px;
  line-height: 50px;
  margin-bottom: 0.5rem;
  outline: 0;
  transition: border-color 0.25s ease-out;
  position: relative;
  z-index: 3;

  &:hover {
    border-color: ${props => props.theme.grey3};
  }

  &:focus,
  &:active {
    border-color: ${props => props.theme.mainAccent};
  }
`;

const FormGroup = styled.div`
  margin: 0.5rem 0;
`;

const FormLabel = styled.label`
  font-size: 13px;
  color: ${props => props.theme.text};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 0.4rem;
  display: block;
  line-height: 1.5;
`;

const InputPrefix = styled.div`
  opacity: 0.6;
  position: absolute;
  line-height: 50px;
  z-index: 4;
  padding-left: 10px;
  pointer-events: none;
  text-align: center;
  min-width: 55px;
`;

const Select = styled(Input)``;

const Textarea = styled(Input)`
  height: auto;
  min-height: 50px;
  line-height: 1.4;
  padding: 10px 15px;
`;

export { Input, FormGroup, FormLabel, Select, InputPrefix, Textarea };
