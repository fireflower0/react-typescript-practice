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

interface Props {
  values: string[];
  isOrdered?: boolean;
}

const List: React.FC<Props> = props => {
  const valueToLists = (value: string) => (
    <LIWrapper key={value}>{value}</LIWrapper>
  );

  return (
    props.isOrdered
      ? <OLWrapper>{props.values.map(valueToLists)}</OLWrapper>
      : <ULWrapper>{props.values.map(valueToLists)}</ULWrapper>
  );
};

export default List;
