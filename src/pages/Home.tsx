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
import CheckBox from '../atoms/CheckBox';
import Select from '../atoms/Select';
import Date from '../atoms/Date';
import Time from '../atoms/Time';
import Color from '../atoms/Color';

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
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [selectedBloodType, setSelectedBloodType] = useState('O');
  const [date, setDate] = useState('2021-04-04');
  const [time, setTime] = useState('12:00');
  const [color, setColor] = useState('#e66465');

  const fruits = [
    { id: 'apple', labelText: 'りんご', value: 'apple' },
    { id: 'orange', labelText: 'オレンジ', value: 'orange' },
    { id: 'grape', labelText: 'ぶどう', value: 'grape' },
  ];
  const colors = [
    { id: 'red', labelText: '赤', value: 'red' },
    { id: 'green', labelText: '青', value: 'green' },
    { id: 'blue', labelText: '緑', value: 'blue' },
  ];
  const bloodTypes = [
    { id: 'typeA', value: 'A' },
    { id: 'typeB', value: 'B' },
    { id: 'typeO', value: 'O' },
    { id: 'typeAB', value: 'AB' },
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

      <FieldSet
        labelText='CheckBox'
        form={
          <div>
            {colors.map(v => (
              <CheckBox
                key={v.id}
                id={v.id}
                labelText={v.labelText}
                value={v.value}
                values={selectedValues}
                checked={selectedValues.includes(v.value)}
                setValue={setSelectedValues}
              />
            ))}
            {selectedValues.length === 0 ? '' : selectedValues.join(', ')}
          </div>
        }
      />

      <FieldSet
        labelText='Select'
        form={
          <div>
            <Select
              options={bloodTypes}
              value={selectedBloodType}
              setValue={setSelectedBloodType}
            />
            血液型：{selectedBloodType}
          </div>
        }
      />

      <FieldSet
        labelText='Date'
        form={
          <div>
            <Date defaultValue={date} setDate={setDate} />
            日付：{date}
          </div>
        }
      />

      <FieldSet
        labelText='Time'
        form={
          <div>
            <Time defaultValue={time} setDate={setTime} />
            時刻：{time}
          </div>
        }
      />

      <FieldSet
        labelText='Color'
        form={
          <div>
            <Color defaultValue={color} setColor={setColor} />
            カラーコード：{color}
          </div>
        }
      />
    </FormWrapper>
  );
};

export default Home;
