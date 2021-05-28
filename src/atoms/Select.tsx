import ReactSelect from 'react-select'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomSelect = styled(ReactSelect)`
  width: 100px;
`;

const Select = ({ options, value, setValue, ...rest }: any) => (
  <CustomSelect
    options={options}
    defaultValue={value}
    onChange={(v: any) => setValue(v.value)}
  />
);

Select.defaultProps = {
  options: [],
  value: '',
};

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default Select;
