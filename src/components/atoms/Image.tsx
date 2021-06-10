import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.img`
  margin: 5px;
`;

interface Props {
  imagePath: string;
  height: string;
  width: string;
}

const Image: React.FC<Props> = props => {
  return (
    <ImgWrapper
      src={props.imagePath}
      height={props.height}
      width={props.width}
    />
  );
};

export default Image;
