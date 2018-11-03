import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: rgba(1, 22, 39, 0.1) 1px solid;
  margin: 0 0 35px 0;
  padding: 0 0 35px 0;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Email = styled.p`
  color: rgba(1, 22, 39, 0.6);
  font-size: 14px;
  font-weight: 400;
  text-transform: lowercase;
`;

const CommentBody = styled.div`
  margin: 20px 0 0 0;
`;

const Comment = ({ body, email, name }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Email>{email}</Email>
    <CommentBody>
      <p>{body}</p>
    </CommentBody>
  </Wrapper>
);

export default Comment;
