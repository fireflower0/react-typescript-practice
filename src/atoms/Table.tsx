import PropTypes from 'prop-types';
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
  background-color: #BDBDBD;
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

const Table = ({ headers, bodys }: any) => {
  const bodyToRows = (body: any) => {
    const cells: any = Object.values(body);
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
          {headers.map((h: string) => <THWrapper key={h}>{h}</THWrapper>)}
        </tr>
      </thead>
      <tbody>
        {bodys.map(bodyToRows)}
      </tbody>
    </TableWrapper>
  );
};

Table.defaultProps = {
  headers: [],
  bodys: [],
};

Table.propTypes = {
  headers: PropTypes.array,
  bodys: PropTypes.array,
};

export default Table;
