import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin: 5px;
  float: left;
`;
const LabelText = styled.label`
  display: block;
  width: 100px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #ECEFF1;
`;
const RadioWrapper = styled.input`
  display: none;
  &:checked + ${LabelText} {
    background-color: #00E676;
  }
`;

const Radio = ({
  id, labelText, checked, setValue, ...rest
}: any) => (
  <FormWrapper>
    <RadioWrapper
      id={id}
      type='radio'
      checked={checked}
      onChange={e => setValue(e.target.value)}
      {...rest}
    />
    <LabelText htmlFor={id}>{labelText}</LabelText>
  </FormWrapper>
);

Radio.defaultProps = {
  labelText: '',
  value: '',
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default Radio;
