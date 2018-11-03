import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: rgba(1, 22, 39, 0.1) 1px solid;
  margin: 0 0 35px 0;
  padding: 0 0 35px 0;
`;

const Author = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0 0 0;
`;

const Avatar = styled.img`
  border-radius: 4px;
  margin: 0 12px 0 0;
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
  padding: 0 0 0 50px;
`;

const Comment = ({ body, email, name }) => (
  <Wrapper>
    <Author>
      <Avatar
        alt={name}
        src={`https://api.adorable.io/avatars/25/${email}.png`}
      />
      <div>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </div>
    </Author>
    <CommentBody>
      <p>{body}</p>
    </CommentBody>
  </Wrapper>
);

export default Comment;
