import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { HeadLine } from '../atoms/headLine';
import FieldSet from '../atoms/fieldSet';
import Button from '../atoms/button';
import TextBox from '../atoms/textBox';
import LabeledTextBox from '../molecules/labeledTextBox';
import Number from '../atoms/number';
import Search from '../atoms/search';
import TextArea from '../atoms/textArea';
import Radio from '../atoms/radio';
import CheckBox from '../atoms/checkBox';
import Select from '../atoms/select';
import Date from '../atoms/date';
import Time from '../atoms/time';
import Color from '../atoms/color';
import Range from '../atoms/range';
import Progress from '../atoms/progress';
import Image from '../atoms/Image';
import Canvas from '../atoms/canvas';
import CodeBlock from '../atoms/codeBlock';
import List from '../atoms/list';
import Table from '../atoms/table';
import Moment from 'react-moment';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #e3f2fd;
`;

const Home: React.FC = () => {
  const [sw, setSw] = useState('Off');
  const [msg, setMsg] = useState('Hello, world!');
  const [name, setName] = useState('');
  const [num, setNum] = useState(50);
  const [searchText, setSearchText] = useState('');
  const [msg2, setMsg2] = useState('Hello, world!');
  const [selectedValue, setSelectedValue] = useState('apple');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [date, setDate] = useState('2021-04-04');
  const [time, setTime] = useState('12:00');
  const [color, setColor] = useState('#e66465');
  const [range, setRange] = useState(75);
  const [numValue, setNumValue] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const loadFile = (files: FileList | null) => {
    setFile(files !== null ? files[0] : null);
  };

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
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'O', value: 'O' },
    { label: 'AB', value: 'AB' },
  ];
  const listValues = ['foo', 'bar', 'baz'];
  const tableHeaders = ['No', 'Name', 'Description'];
  const tableBodys = [
    { no: 0, name: 'foo', description: '---' },
    { no: 1, name: 'bar', description: '---' },
    { no: 2, name: 'baz', description: '---' },
    { no: 3, name: 'qux', description: '---' },
    { no: 4, name: 'quux', description: '---' },
    { no: 5, name: 'corge', description: '---' },
    { no: 6, name: 'grault', description: '---' },
    { no: 7, name: 'garply', description: '---' },
    { no: 8, name: 'waldo', description: '---' },
    { no: 9, name: 'fred', description: '---' },
    { no: 10, name: 'plugh', description: '---' },
    { no: 11, name: 'xyzzy', description: '---' },
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
        labelText="Button"
        form={
          <div>
            {sw === 'On' ? (
              <Button
                labelText="ON"
                styles={{
                  width: '100px',
                  color: 'white',
                  backgroundColor: 'green',
                }}
                onClick={() => setSw('Off')}
              />
            ) : (
              <Button
                labelText="OFF"
                styles={{
                  width: '100px',
                  color: 'white',
                  backgroundColor: 'red',
                }}
                onClick={() => setSw('On')}
              />
            )}
            {sw}
          </div>
        }
      />

      <FieldSet
        labelText="TextBox"
        form={
          <div>
            <TextBox value={msg} setValue={setMsg} />
            {msg}
          </div>
        }
      />

      <FieldSet
        labelText="LabeledTextBox"
        form={
          <div>
            <LabeledTextBox labelText="Name" value={name} setValue={setName} />
            {name}
          </div>
        }
      />

      <FieldSet
        labelText="Number"
        form={
          <div>
            <Number value={num} setValue={setNum} />
            {num}
          </div>
        }
      />

      <FieldSet
        labelText="Search"
        form={
          <div>
            <Search value={searchText} setValue={setSearchText} />
            {searchText}
          </div>
        }
      />

      <FieldSet
        labelText="TextArea"
        form={
          <div>
            <TextArea value={msg2} setValue={setMsg2} />
            {msg2}
          </div>
        }
      />

      <FieldSet
        labelText="Radio"
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
        labelText="CheckBox"
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
        labelText="Select"
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
        labelText="Date"
        form={
          <div>
            <Date defaultValue={date} setDate={setDate} />
            日付：<Moment>{date}</Moment>
          </div>
        }
      />

      <FieldSet
        labelText="Time"
        form={
          <div>
            <Time defaultValue={time} setDate={setTime} />
            時刻：{time}
          </div>
        }
      />

      <FieldSet
        labelText="Color"
        form={
          <div>
            <Color defaultValue={color} setColor={setColor} />
            カラーコード：{color}
          </div>
        }
      />

      <FieldSet
        labelText="Range"
        form={
          <div>
            <Range defaultValue={range} setRange={setRange} />
            位置：{range}
          </div>
        }
      />

      <FieldSet
        labelText="Progress"
        form={
          <div>
            <Number value={numValue} setValue={setNumValue} min={0} max={100} />
            <Progress max="100" value={numValue} />
            {numValue} %
          </div>
        }
      />

      <FieldSet
        labelText="Image"
        form={
          <div>
            <input type="file" onChange={e => loadFile(e.target.files)} />
            {file !== null ? (
              <div>
                <Image imagePath={file.path} width="100" height="100" />
                <Canvas imagePath={file.path} width={100} height={100} />
              </div>
            ) : null}
          </div>
        }
      />

      <FieldSet
        labelText="Canvas"
        form={
          <div>
            <Canvas color="red" width={100} height={100} />
            <Canvas color="green" width={50} height={50} />
            <Canvas color="blue" width={100} height={50} />
            <Canvas color="yellow" width={50} height={100} />
            <div>
              <Canvas color="white" width={500} height={500} />
            </div>
          </div>
        }
      />

      <FieldSet
        labelText="CodeBlock"
        form={
          <div>
            <HeadLine.H4>Common Lisp</HeadLine.H4>
            <CodeBlock
              language="common-lisp"
              code='(format t "Hello, world!~%")'
            />
            <HeadLine.H4>Clojure</HeadLine.H4>
            <CodeBlock language="clojure" code='(println "Hello, world!")' />
            <HeadLine.H4>Racket</HeadLine.H4>
            <CodeBlock language="racket" code='(printf "Hello world!\n")' />
            <HeadLine.H4>Haskell</HeadLine.H4>
            <CodeBlock
              language="haskell"
              code='main = putStrLn "Hello world!"'
            />
            <HeadLine.H4>C</HeadLine.H4>
            <CodeBlock
              language="c"
              code='#include <stdio.h>

int main(int argc, char argv[]) {
  printf("Hello, world!\n");
  return 0;
}'
            />
            <HeadLine.H4>C++</HeadLine.H4>
            <CodeBlock
              language="c++"
              code='#include <iostream>
using namespace std;

int main(int argc, char argv[]) {
  cout << "Hello, world!" << endl;
  return 0;
}'
            />
            <HeadLine.H4>Java</HeadLine.H4>
            <CodeBlock
              language="java"
              code='public Hello {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}'
            />
            <HeadLine.H4>C#</HeadLine.H4>
            <CodeBlock
              language="c#"
              code='namespace Hello {
  class Program {
    static void Main(string[] args) {
      System.Console.WriteLine("Hello, world!");
    }
  }
}'
            />
            <HeadLine.H4>Rust</HeadLine.H4>
            <CodeBlock
              language="rust"
              code='fn main() {
  println!("Hello, world!");
}'
            />
            <HeadLine.H4>Python2</HeadLine.H4>
            <CodeBlock language="python2" code='print "Hello world!"' />
            <HeadLine.H4>Python3</HeadLine.H4>
            <CodeBlock language="python3" code='print("Hello world!")' />
          </div>
        }
      />

      <FieldSet
        labelText="List"
        form={
          <div>
            <List values={listValues} />
            <List values={listValues} isOrdered />
          </div>
        }
      />

      <FieldSet
        labelText="Table"
        form={
          <div>
            <Table headers={tableHeaders} bodys={tableBodys} />
          </div>
        }
      />
    </FormWrapper>
  );
};

export default Home;
