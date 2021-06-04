import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  margin: 5px;
  border: 3px solid gray;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
`;

const THWrapper = styled.th`
  border: 3px solid gray;
  padding: 5px;
  background-color: #bdbdbd;
  color: #212121;
`;

const TDWrapper = styled.td`
  border: 3px solid gray;
  padding: 10px;
  background-color: whitesmoke;
  &:hover {
    background-color: #fffeb2;
  }
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
      <tr key={cells[0]}>
        {cells.map((v: string) => (
          <TDWrapper key={v}>{v}</TDWrapper>
        ))}
      </tr>
    );
  };

  return (
    <TableWrapper>
      <thead>
        <tr>
          {props.headers.map((h: string) => (
            <THWrapper key={h}>{h}</THWrapper>
          ))}
        </tr>
      </thead>
      <tbody>{props.bodys.map(bodyToRows)}</tbody>
    </TableWrapper>
  );
};

export default Table;
