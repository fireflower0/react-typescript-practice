import PropTypes from 'prop-types';
import styled from 'styled-components';

const DateWrapper = styled.input`
  margin: 5px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #ECEFF1;
  font-size: 14px;
`;

const Date = ({ defaultValue, setDate, ...rest }: any) => (
  <DateWrapper
    type='date'
    defaultValue={defaultValue}
    onChange={v => setDate(v.target.value)}
  />
);

Date.defaultProps = {
  defaultValue: '',
};

Date.propTypes = {
  defaultValue: PropTypes.string,
  setDate: PropTypes.func.isRequired,
};

export default Date;
