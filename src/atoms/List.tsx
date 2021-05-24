import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Base = css`
  border-top: solid #212121 1px;
  border-bottom: solid #212121 1px;
  padding: 0.5em 0 0.5em 1.5em;
`;

const ULWrapper = styled.ul`
  ${Base}
`;

const OLWrapper = styled.ol`
  ${Base}
`;

const LIWrapper = styled.li`
  line-height: 1.5;
  padding: 0.5em 0;
`;

const List = ({ values, isOrdered }: any) => {
  const valueToLists = (value: string) => (
    <LIWrapper key={value}>{value}</LIWrapper>
  );

  return (
    isOrdered
      ? <OLWrapper>{values.map(valueToLists)}</OLWrapper>
      : <ULWrapper>{values.map(valueToLists)}</ULWrapper>
  );
};

List.defaultProps = {
  values: [],
  isOrdered: false,
};

List.propTypes = {
  values: PropTypes.array,
  isOrdered: PropTypes.bool,
};

export default List;
