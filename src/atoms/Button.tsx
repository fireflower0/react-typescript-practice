import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  margin: 5px;
  padding: 5px;
  margin-left: 5px;
  border: none;
  border-radius: 3px;
`;

const Button = ({ labelText, styles, ...rest }: any) => (
  <ButtonWrapper style={styles} {...rest} >
    {labelText}
  </ButtonWrapper>
);

Button.defaultProps = {
  labelText: '',
  styles: {},
};

Button.propTypes = {
  labelText: PropTypes.string,
  styles: PropTypes.object,
};


export default Button;
