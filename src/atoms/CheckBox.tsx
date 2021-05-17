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
const CheckBoxWrapper = styled.input`
  display: none;
  &:checked + ${LabelText} {
    background-color: #00E676;
  }
`;

const CheckBox = ({
  id,labelText, checked, values, setValue, ...rest
}: any) => (
  <FormWrapper>
    <CheckBoxWrapper
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        if (e.target.checked) {
          setValue(values.concat(e.target.value));
        } else {
          setValue(values.filter((v: any) => v !== e.target.value));
        }
      }}
      {...rest}
    />
    <LabelText htmlFor={id}>{labelText}</LabelText>
  </FormWrapper>
);

CheckBox.defaultProps = {
  labelText: '',
  value: '',
  values: [],
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string,
  values: PropTypes.array,
  setValue: PropTypes.func.isRequired,
};

export default CheckBox;
