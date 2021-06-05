import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.label`
  margin: 5px;
  padding: 5px;
`;

interface Props {
  labelText: string;
}

const Label: React.FC<Props> = props => {
  return <LabelWrapper>{props.labelText}</LabelWrapper>;
};

export default Label;
