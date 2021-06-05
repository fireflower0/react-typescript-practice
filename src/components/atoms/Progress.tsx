import React from 'react';
import styled from 'styled-components';

const ProgressWrapper = styled.progress`
  -webkit-appearance: none;
  margin: 5px;
  &::-webkit-progress-value {
    background-color: orange;
  }
`;

interface Props {
  max: string;
  value: number;
}

const Progress: React.FC<Props> = props => (
  <ProgressWrapper max={props.max} value={props.value} />
);

export default Progress;
