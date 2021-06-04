import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #e3f2fd;
`;

const ViewPort = styled.div`
  background-color: black;
  height: 30px;
  width: 100%;
  overflow: hidden;
`;

const CyclonEye = styled.div`
  background-color: #f57f17;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  color: white;
  height: 100%;
  width: 20%;
  animation: 5s linear 0s infinite alternate moveEye;
  @keyframes moveEye {
    from {
      margin-left: -20%;
    }
    to {
      margin-left: 100%;
    }
  }
`;

const Animation: React.FC = () => {
  return (
    <FormWrapper>
      <ViewPort>
        <CyclonEye />
      </ViewPort>
    </FormWrapper>
  );
};

export default Animation;
