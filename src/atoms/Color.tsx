import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorWrapper = styled.input`
  margin: 5px;
`;

const Color = ({ setColor, ...rest }: any) => (
  <ColorWrapper
    type='color'
    onChange={v => setColor(v.target.value)}
    {...rest}
  />
);

Color.defaultProps = {
  defaultValue: '',
};

Color.propTypes = {
  defaultValue: PropTypes.string,
  setColor: PropTypes.func.isRequired,
};

export default Color;
