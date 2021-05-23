import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = styled.input`
  margin: 5px;
  width: 100px;
  height: 30px;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #ECEFF1;
`;

const Select = ({ options, value, setValue, ...rest }: any) => (
  <div>
    <SelectWrapper
      list='brow'
      value={value}
      onChange={v => setValue(v.target.value)}
    />
    <datalist id='brow'>
      {options.map((o: any) => (
        <option key={o.id} value={o.value} />
      ))}
    </datalist>
  </div>
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
