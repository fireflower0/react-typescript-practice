import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';

const FormWrapper = styled.div`
  margin: 5px;
`;

const Navbar = () => {
  const navContents = [{
    id: 1,
    path: '/',
    label: 'Home'
  }, {
    id: 2,
    path: '/animation',
    label: 'Animation'
  }, {
    id: 3,
    path: '/about',
    label: 'About'
  }];

  const makeNavContent = (content: any) => (
    <Link key={content.id} to={content.path} >
      <Button
        labelText={content.label}
        styles={{
          width: '100px',
          color: '#263238',
          backgroundColor: '#80D8FF'
        }}
      />
    </Link>
  );

  return (
    <FormWrapper>
      {navContents.map(makeNavContent)}
    </FormWrapper>
  );
};

export default Navbar;
