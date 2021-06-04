import React from 'react';
import styled from 'styled-components';

const TimeWrapper = styled.input`
  margin: 5px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #eceff1;
  font-size: 14px;
`;

interface Props {
  defaultValue: string;
  setDate: (value: string) => void;
}

const Time: React.FC<Props> = props => (
  <TimeWrapper
    type="time"
    defaultValue={props.defaultValue}
    onChange={v => props.setDate(v.target.value)}
  />
);

export default Time;
