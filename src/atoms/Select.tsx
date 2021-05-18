import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = styled.select`
  margin: 5px;
  width: 100px;
  height: 30px;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #ECEFF1;
`;

const Select = ({ options, value, setValue, ...rest }: any) => (
  <SelectWrapper
    defaultValue={value}
    onChange={v => setValue(v.target.value)}
  >
    {options.map((o: any) => (
      <option key={o.id} value={o.value}>{o.value}</option>)
    )}
  </SelectWrapper>
);

Select.defaultProps = {
  options: [],
};

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Select;
