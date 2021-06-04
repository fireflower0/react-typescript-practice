import React from 'react';
import styled from 'styled-components';

const RangeWrapper = styled.input`
  margin: 5px;
`;

interface Props {
  defaultValue: number;
  setRange: (value: number) => void;
}

const Range: React.FC<Props> = props => (
  <RangeWrapper
    type="range"
    defaultValue={props.defaultValue}
    onChange={v => props.setRange(parseInt(v.target.value))}
  />
);

export default Range;
