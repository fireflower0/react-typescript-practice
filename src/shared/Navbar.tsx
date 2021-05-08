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
    path: '/about',
    label: 'About'
  }];

  const makeNavContent = (content: any) => (
    <Link key={content.id} to={content.path} >
      <Button
        labelText={content.label}
        styles={{ margin: '5px', width: '100px' }}
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
