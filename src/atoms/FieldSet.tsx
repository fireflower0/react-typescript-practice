import PropTypes from 'prop-types';
import styled from 'styled-components';

const FieldSetWrapper = styled.fieldset`
  margin: 10px;
  border: 1px solid #263238;
  border-radius: 5px;
`;

const LegendWrapper = styled.legend`
  padding: 0 10px;
  width: 100px;
  border: 1px solid #263238;
  border-style: none double none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`;

const FieldSet = ({ labelText, form }: any) => (
  <FieldSetWrapper>
    <LegendWrapper>{labelText}</LegendWrapper>
    {form}
  </FieldSetWrapper>
);

FieldSet.defaultProps = {
  labelText: '',
  form: null,
};

FieldSet.propTypes = {
  labelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  form: PropTypes.object,
};

export default FieldSet;
