import ReactSelect from 'react-select'
import PropTypes from 'prop-types';

const Select = ({
  styles, width, menuColor, options, value, setValue, ...rest
}: any) => (
  <ReactSelect
    styles={styles}
    width={width}
    menuColor={menuColor}
    options={options}
    defaultValue={value}
    onChange={(v) => setValue(v.value)}
  />
);

Select.defaultProps = {
  styles: {},
  width: '500px',
  menuColor: 'black',
  options: [],
  value: '',
};

Select.propTypes = {
  styles: PropTypes.object,
  width: PropTypes.string,
  menuColor: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default Select;
