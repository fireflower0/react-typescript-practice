import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/button';

const FormWrapper = styled.div`
  margin: 5px;
`;

const Navbar: React.FC = () => {
  interface ContentType {
    id: number;
    path: string;
    label: string;
  }

  const navContents = [
    {
      id: 1,
      path: '/',
      label: 'Home',
    },
    {
      id: 2,
      path: '/animation',
      label: 'Animation',
    },
    {
      id: 3,
      path: '/about',
      label: 'About',
    },
  ];

  const makeNavContent: React.FC<ContentType> = content => (
    <Link key={content.id} to={content.path}>
      <Button
        labelText={content.label}
        styles={{
          width: '100px',
          color: '#263238',
          backgroundColor: '#80D8FF',
        }}
      />
    </Link>
  );

  return <FormWrapper>{navContents.map(makeNavContent)}</FormWrapper>;
};

export default Navbar;
