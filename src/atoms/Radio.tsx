import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin: 5px;
  float: left;
`;
const LabelText = styled.label`
  display: block;
  width: 100px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #eceff1;
`;
const RadioWrapper = styled.input`
  display: none;
  &:checked + ${LabelText} {
    background-color: #00e676;
  }
`;

interface Props {
  id: string;
  labelText: string;
  checked: boolean;
  value: string;
  setValue: (value: string) => void;
}

const Radio: React.FC<Props> = props => (
  <FormWrapper>
    <RadioWrapper
      id={props.id}
      type="radio"
      value={props.value}
      checked={props.checked}
      onChange={e => props.setValue(e.target.value)}
    />
    <LabelText htmlFor={props.id}>{props.labelText}</LabelText>
  </FormWrapper>
);

export default Radio;
