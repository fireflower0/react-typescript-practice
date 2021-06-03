import styled from 'styled-components';

const DateWrapper = styled.input`
  margin: 5px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid #263238;
  border-radius: 5px;
  background-color: #ECEFF1;
  font-size: 14px;
`;

interface Props {
  defaultValue: string;
  setDate: (value: string) => void;
}

const Date: React.FC<Props> = props => (
  <DateWrapper
    type='date'
    defaultValue={props.defaultValue}
    onChange={v => props.setDate(v.target.value)}
  />
);

export default Date;
