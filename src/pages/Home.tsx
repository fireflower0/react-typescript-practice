import { useState } from 'react';
import styled from 'styled-components';
import { HeadLine } from '../atoms/HeadLine';
import FieldSet from '../atoms/FieldSet';
import Button from '../atoms/Button';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #E3F2FD;
`;

const Home = () => {
  const [sw, setSw] = useState('Off');

  return (
    <FormWrapper>
      <HeadLine.H1>HeadLine.H1</HeadLine.H1>
      <HeadLine.H2>HeadLine.H2</HeadLine.H2>
      <HeadLine.H3>HeadLine.H3</HeadLine.H3>
      <HeadLine.H4>HeadLine.H4</HeadLine.H4>
      <HeadLine.H5>HeadLine.H5</HeadLine.H5>
      <HeadLine.H6>HeadLine.H6</HeadLine.H6>
      <FieldSet
        labelText='Button'
        form={
          <div>
            {sw === 'On'
             ? (
               <Button
                 labelText='ON'
                 styles={{
                   width: '100px',
                   color: 'white',
                   backgroundColor: 'green'
                 }}
                 onClick={() => setSw('Off')}
               />
             )
             : (
               <Button
                 labelText='OFF'
                 styles={{
                   width: '100px',
                   color: 'white',
                   backgroundColor: 'red'
                 }}
                 onClick={() => setSw('On')}
               />
             )}
            {sw}
          </div>
        }
      />
    </FormWrapper>
  );
};

export default Home;
