import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextAreaWrapper = styled.textarea`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

const TextArea = ({ setValue, ...rest }: any) => (
  <TextAreaWrapper
    onChange={e => setValue(e.target.value)}
    {...rest}
  />
);

TextArea.defaultProps = {
    value: '',
  };

TextArea.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default TextArea;
