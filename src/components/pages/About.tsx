import React from 'react';
import styled from 'styled-components';
import { HeadLine } from '../atoms/headLine';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #e3f2fd;
`;

const About: React.FC = () => {
  return (
    <FormWrapper>
      <HeadLine.H1>About</HeadLine.H1>
      <p>React TypeScript Electron Practice</p>
    </FormWrapper>
  );
};

export default About;
