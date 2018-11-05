import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = styled.header`
  align-items: center;
  background-color: #011627;
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 45px;
  font-weight: 800;
`;

const Header = () => (
  <Hero>
    <Link to="/">
      <H1>React Blog</H1>
    </Link>
  </Hero>
);

export default Header;
