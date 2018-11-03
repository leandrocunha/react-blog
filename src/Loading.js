import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  margin: 30px;
  height: 30px;
  width: 30px;
  animation: ${rotate} 0.8s infinite linear;
  border: 4px solid #e9003f;
  border-right-color: transparent;
  border-radius: 50%;
`;

const Loading = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
);

export default Loading;
