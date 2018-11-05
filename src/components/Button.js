import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #e9003f;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  margin: 0 auto;
  padding: 8px 16px;

  &:disabled {
    opacity: 0.3;
  }
`;

const Button = ({ disabled, label, onClick }) => (
  <Btn disabled={disabled} onClick={() => (onClick ? onClick() : null)}>
    {label}
  </Btn>
);

export default Button;
