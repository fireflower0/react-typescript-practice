import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextBoxWrapper = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

const TextBox = ({ setValue, ...rest }: any) => (
  <TextBoxWrapper
    onChange={e => setValue(e.target.value)}
    {...rest}
  />
);

TextBox.defaultProps = {
  value: '',
}

TextBox.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default TextBox;
