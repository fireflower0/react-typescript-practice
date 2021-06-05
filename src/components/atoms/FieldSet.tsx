import React from 'react';
import styled from 'styled-components';

const FieldSetWrapper = styled.fieldset`
  margin: 10px;
  border: 1px solid #263238;
  border-radius: 5px;
`;

const LegendWrapper = styled.legend`
  padding: 0 10px;
  width: 100px;
  border: 1px solid #263238;
  border-style: none double none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`;

interface Props {
  labelText: string;
  form: unknown;
}

const FieldSet: React.FC<Props> = props => (
  <FieldSetWrapper>
    <LegendWrapper>{props.labelText}</LegendWrapper>
    {props.form}
  </FieldSetWrapper>
);

export default FieldSet;
