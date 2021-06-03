import styled from 'styled-components';

const ButtonWrapper = styled.button`
  margin: 5px;
  padding: 5px;
  margin-left: 5px;
  border: none;
  border-radius: 3px;
`;

interface Props {
  labelText: string;
  styles?: {
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
  };
  onClick?: () => void;
}

const Button: React.FC<Props> = props => (
  <ButtonWrapper style={props.styles} onClick={props.onClick}>
    {props.labelText}
  </ButtonWrapper>
);

export default Button;
