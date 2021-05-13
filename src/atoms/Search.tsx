import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchWrapper = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

const Search = ({ setValue, ...rest }: any) => (
  <SearchWrapper
    type='search'
    onChange={e => setValue(e.target.value)}
    {...rest}
  />
);

Search.defaultProps = {
  value: '',
};

Search.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default Search;
