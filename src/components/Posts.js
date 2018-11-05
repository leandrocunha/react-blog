import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { preview } from '../utils';
import Author from './Author';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  max-width: 760px;
`;

const Post = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 4px 0.5px;
  margin: 0 0 25px 0;
  padding: 15px;
`;

const PostTitle = styled.h2`
  color: #011627;
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 10px 0;

  a {
    color: #011627;
    text-decoration: none;
  }
`;

const Posts = ({ posts, onClick }) => (
  <Wrapper>
    {posts.map(post => (
      <Post key={post.id}>
        <PostTitle>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </PostTitle>
        <p>{preview(post.body)}</p>
        <Author id={post.userId} />
      </Post>
    ))}
    <Button label="load more" onClick={onClick} />
  </Wrapper>
);

export default Posts;
