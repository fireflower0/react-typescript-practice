import { useState } from 'react';
import styled from 'styled-components';
import { HeadLine } from '../atoms/HeadLine';
import FieldSet from '../atoms/FieldSet';
import Button from '../atoms/Button';
import TextBox from '../atoms/TextBox';
import Number from '../atoms/Number';
import Search from '../atoms/Search';
import TextArea from '../atoms/TextArea';
import Radio from '../atoms/Radio';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #E3F2FD;
`;

const Home = () => {
  const [sw, setSw] = useState('Off');
  const [msg, setMsg] = useState('Hello, world!');
  const [num, setNum] = useState(50);
  const [searchText, setSearchText] = useState('');
  const [msg2, setMsg2] = useState('Hello, world!');
  const [selectedValue, setSelectedValue] = useState('apple');

  const fruits = [
    { id: 'apple', labelText: 'りんご', value: 'apple' },
    { id: 'orange', labelText: 'オレンジ', value: 'orange' },
    { id: 'grape', labelText: 'ぶどう', value: 'grape' },
  ];

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

      <FieldSet
        labelText='TextBox'
        form={
          <div>
            <TextBox value={msg} setValue={setMsg} />
            {msg}
          </div>
        }
      />

      <FieldSet
        labelText='Number'
        form={
          <div>
            <Number value={num} setValue={setNum} />
            {num}
          </div>
        }
      />

      <FieldSet
        labelText='Search'
        form={
          <div>
            <Search value={searchText} setValue={setSearchText} />
            {searchText}
          </div>
        }
      />

      <FieldSet
        labelText='TextArea'
        form={
          <div>
            <TextArea value={msg2} setValue={setMsg2} />
            {msg2}
          </div>
        }
      />

      <FieldSet
        labelText='Radio'
        form={
          <div>
            {fruits.map(v => (
              <Radio
                key={v.id}
                id={v.id}
                labelText={v.labelText}
                value={v.value}
                checked={selectedValue === v.value}
                setValue={setSelectedValue}
              />
            ))}
            {selectedValue}
          </div>
        }
      />

    </FormWrapper>
  );
};

export default Home;
