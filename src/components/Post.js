import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import api from '../api';
import Breadcrumb from './Breadcrumd';
import Comments from './Comments';
import Header from './Header';
import Loading from './Loading';

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 4px 0.5px;
  margin: 15px auto;
  max-width: 760px;
  padding: 25px;
  width: 90%;
`;

const PostTitle = styled.h1`
  color: #011627;
  font-size: 31px;
  font-weight: 700;
  margin: 0 0 20px 0;
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    api.post(match.params.id).then(res => {
      dispatch({ type: 'POST', data: res });
      setTimeout(() => this.setState({ loading: false }), 800);
    });
  }

  render() {
    const { loading } = this.state;
    const { post } = this.props;

    return (
      <Fragment>
        <Header />
        <Breadcrumb />
        {loading ? (
          <Loading />
        ) : (
          <Wrapper>
            <PostTitle>{post.title}</PostTitle>
            <p>{post.body}</p>
            <Comments postId={post.id} />
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ post: state.posts.post });

export default connect(mapStateToProps)(Post);
