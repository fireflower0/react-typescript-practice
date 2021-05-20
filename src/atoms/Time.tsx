import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimeWrapper = styled.input`
  margin: 5px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #ECEFF1;
  font-size: 14px;
`;

const Time = ({ defaultValue, setDate, ...rest }: any) => (
  <TimeWrapper
    type='time'
    defaultValue={defaultValue}
    onChange={v => setDate(v.target.value)}
  />
);

Time.defaultProps = {
  defaultValue: '',
};

Time.propTypes = {
  defaultValue: PropTypes.string,
  setDate: PropTypes.func.isRequired,
};

export default Time;
