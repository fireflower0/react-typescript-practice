import React from 'react';
import styled from 'styled-components';

const ColorWrapper = styled.input`
  margin: 5px;
`;

interface Props {
  defaultValue: string;
  setColor: (value: string) => void;
}

const Color: React.FC<Props> = props => (
  <ColorWrapper
    type="color"
    defaultValue={props.defaultValue}
    onChange={v => props.setColor(v.target.value)}
  />
);

export default Color;
