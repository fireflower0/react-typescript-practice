import ReactSelect from 'react-select'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  margin: 10px;
  width: 200px;
`;

const Select = ({ options, value, setValue, ...rest }: any) => (
  <SelectWrapper>
    <ReactSelect
      options={options}
      defaultValue={value}
      onChange={(v) => setValue(v.value)}
    />
  </SelectWrapper>
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
