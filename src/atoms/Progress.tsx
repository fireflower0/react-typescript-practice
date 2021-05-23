import styled from 'styled-components';

const ProgressWrapper = styled.progress`
  -webkit-appearance: none;
  margin: 5px;
  &::-webkit-progress-value {
    background-color: orange;
  }
`;

const Progress = ({ ...rest }) => (
  <ProgressWrapper {...rest} />
);

Progress.defaultProps = {
};

Progress.propTypes = {
};

export default Progress;
