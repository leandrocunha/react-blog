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
  margin: ${props => (props.size === 'small' ? '15px' : '30px')};
  height: ${props => (props.size === 'small' ? '15px' : '30px')};
  width: ${props => (props.size === 'small' ? '15px' : '30px')};
  animation: ${rotate} 0.8s infinite linear;
  border: 4px solid #e9003f;
  border-right-color: transparent;
  border-radius: 50%;
`;

const Loading = props => (
  <Wrapper>
    <Loader {...props} />
  </Wrapper>
);

export default Loading;
