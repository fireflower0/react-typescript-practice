import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const Search: React.FC<Props> = props => (
  <SearchWrapper
    type="search"
    value={props.value}
    onChange={e => props.setValue(e.target.value)}
  />
);

export default Search;
