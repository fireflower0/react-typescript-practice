import styled from 'styled-components';

const TextBoxWrapper = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const TextBox: React.FC<Props> = props => (
  <TextBoxWrapper
    value={props.value}
    onChange={e => props.setValue(e.target.value)}
  />
);

export default TextBox;
