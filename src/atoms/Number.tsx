import React from 'react';
import styled from 'styled-components';

const NumberWrapper = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

interface Props {
  value: number;
  min?: number;
  max?: number;
  setValue: (value: number) => void;
}

const Number: React.FC<Props> = props => (
  <NumberWrapper
    type="number"
    min={props.min}
    max={props.max}
    onChange={e => props.setValue(parseInt(e.target.value))}
  />
);

export default Number;
