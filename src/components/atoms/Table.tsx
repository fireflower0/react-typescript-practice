import React from 'react';
import styled, { css } from 'styled-components';

const BaseStyle = css`
  text-align: center;
  width: 25%;
  padding: 10px;
`;

const TableWrapper = styled.table`
  ${BaseStyle}
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  color: #263238;
  background-color: #eceff1;
`;

const TRWrapper = styled.tr`
  border-bottom: solid 2px #263238;
`;

const THWrapper = styled.th`
  ${BaseStyle}
`;

const TDWrapper = styled.td`
  ${BaseStyle}
`;

interface Props {
  headers: string[];
  bodys: unknown[];
}

const Table: React.FC<Props> = props => {
  const bodyToRows = (body: unknown) => {
    const b = Object.assign({}, {}, body);
    const cells: string[] = Object.values(b);
    return (
      <TRWrapper key={cells[0]}>
        {cells.map((v: string) => (
          <TDWrapper key={v}>{v}</TDWrapper>
        ))}
      </TRWrapper>
    );
  };

  return (
    <TableWrapper>
      <thead>
        <TRWrapper>
          {props.headers.map((h: string) => (
            <THWrapper key={h}>{h}</THWrapper>
          ))}
        </TRWrapper>
      </thead>
      <tbody>{props.bodys.map(bodyToRows)}</tbody>
    </TableWrapper>
  );
};

export default Table;
