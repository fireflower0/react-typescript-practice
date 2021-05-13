import PropTypes from 'prop-types';
import styled from 'styled-components';

const NumberWrapper = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

const Number = ({ setValue, ...rest }: any) => (
  <NumberWrapper
    type='number'
    onChange={e => setValue(e.target.value)}
    {...rest}
  />
);

Number.defaultProps = {
  value: 0,
};

Number.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  setValue: PropTypes.func.isRequired,
};

export default Number;
