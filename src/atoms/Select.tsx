import React from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';

const CustomSelect = styled(ReactSelect)`
  width: 200px;
`;

interface Props {
  options: unknown[];
  value: string;
  setValue: (value: string) => void;
}

const Select: React.FC<Props> = props => (
  <CustomSelect
    options={props.options}
    defaultValue={props.value}
    onChange={(v: { value: string }) => props.setValue(v.value)}
  />
);

export default Select;
