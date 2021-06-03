import ReactSelect from 'react-select'
import styled from 'styled-components';

const CustomSelect = styled(ReactSelect)`
  width: 200px;
`;

interface Props {
  options: object[];
  value: string;
  setValue: (value: string) => void;
}

const Select: React.FC<Props> = props => (
  <CustomSelect
    options={props.options}
    defaultValue={props.value}
    onChange={(v: any) => props.setValue(v.value)}
  />
);

export default Select;
