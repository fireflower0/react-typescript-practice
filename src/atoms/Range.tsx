import PropTypes from 'prop-types';
import styled from 'styled-components';

const RangeWrapper = styled.input`
  margin: 5px;
`;

const Range = ({ setRange, ...rest }: any) => (
  <RangeWrapper
    type='range'
    onChange={v => setRange(v.target.value)}
    {...rest}
  />
);

Range.defaultProps = {
  defaultValue: 0,
};

Range.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  setRange: PropTypes.func.isRequired,
};

export default Range;
