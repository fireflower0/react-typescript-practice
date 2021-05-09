import styled from 'styled-components';
import { HeadLine } from '../atoms/HeadLine';
import FieldSet from '../atoms/FieldSet';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #E3F2FD;
`;

const Home = () => {
  return (
    <FormWrapper>
      <HeadLine.H1>HeadLine.H1</HeadLine.H1>
      <HeadLine.H2>HeadLine.H2</HeadLine.H2>
      <HeadLine.H3>HeadLine.H3</HeadLine.H3>
      <HeadLine.H4>HeadLine.H4</HeadLine.H4>
      <HeadLine.H5>HeadLine.H5</HeadLine.H5>
      <HeadLine.H6>HeadLine.H6</HeadLine.H6>
      <FieldSet labelText='Hello' form={<div>Hello, world!</div>} />
    </FormWrapper>
  );
};

export default Home;
