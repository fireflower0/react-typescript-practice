import React from 'react';
import styled from 'styled-components';
import TextBox from '../atoms/textBox';
import Label from '../atoms/label';

const FormWrapper = styled.div`
  margin: 5px;
  padding: 5px;
`;

interface Props {
  labelText: string;
  value: string;
  setValue: (value: string) => void;
}

const LabeledTextBox: React.FC<Props> = props => {
  return (
    <FormWrapper>
      <Label labelText={props.labelText} />
      <TextBox value={props.value} setValue={props.setValue} />
    </FormWrapper>
  );
};

export default LabeledTextBox;
