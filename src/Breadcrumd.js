import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: rgba(1, 22, 39, 0.06);
  padding: 10px;
`;

const List = styled.ul`
  display: flex;
  margin: 0 auto;
  max-width: 760px;
`;

const Item = styled.li`
  font-size: 12px;
  margin: 0 10px 0 0;

  &:after {
    content: '/';
    padding: 0 0 0 10px;
  }
`;

const Breadcrumb = () => (
  <Wrapper>
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>Post</Item>
    </List>
  </Wrapper>
);

export default Breadcrumb;
