import styled from 'styled-components';

const TextAreaWrapper = styled.textarea`
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #212121;
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const TextArea: React.FC<Props> = props => (
  <TextAreaWrapper
    value={props.value}
    onChange={e => props.setValue(e.target.value)}
  />
);

export default TextArea;
