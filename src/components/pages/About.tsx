import React from 'react';
import styled from 'styled-components';
import { HeadLine } from '../atoms/HeadLine';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #e3f2fd;
`;

const About: React.FC = () => {
  return (
    <FormWrapper>
      <HeadLine.H1>HeadLine.H1</HeadLine.H1>
      <HeadLine.H2>HeadLine.H2</HeadLine.H2>
      <HeadLine.H3>HeadLine.H3</HeadLine.H3>
      <HeadLine.H4>HeadLine.H4</HeadLine.H4>
      <HeadLine.H5>HeadLine.H5</HeadLine.H5>
      <HeadLine.H6>HeadLine.H6</HeadLine.H6>
    </FormWrapper>
  );
};

export default About;
