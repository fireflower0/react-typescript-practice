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
const CheckBoxWrapper = styled.input`
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
  values: string[];
  setValue: (value: string[]) => void;
}

const CheckBox: React.FC<Props> = props => (
  <FormWrapper>
    <CheckBoxWrapper
      id={props.id}
      type="checkbox"
      value={props.value}
      checked={props.checked}
      onChange={e => {
        if (e.target.checked) {
          props.setValue(props.values.concat(e.target.value));
        } else {
          props.setValue(
            props.values.filter((v: unknown) => v !== e.target.value),
          );
        }
      }}
    />
    <LabelText htmlFor={props.id}>{props.labelText}</LabelText>
  </FormWrapper>
);

export default CheckBox;
