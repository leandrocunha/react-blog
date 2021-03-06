import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import api from '../api';
import Button from './Button';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Loading from './Loading';

const Wrapper = styled.div`
  border-top: rgba(1, 22, 39, 0.1) 1px solid;
  display: flex;
  flex-direction: column;
  margin: 35px 0 0 0;
  padding: 35px 0 0 0;
`;

const Title = styled.h2`
  color: #011627;
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 20px 0;
`;
class Comments extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} limit
     * @param {bool} loading
     */
    this.state = { limit: 3, loading: true };

    /** Bind function to load more comments */
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const { dispatch, postId } = this.props;

    /** Call api to get comments from this posts */
    api.comments(postId).then(res => {
      dispatch({ type: 'COMMENTS', data: res });
      setTimeout(() => this.setState({ loading: false }), 800);
    });
  }

  /**
   * @function loadMore Incrise local state limit and get more comments
   */
  loadMore() {
    const { limit } = this.state;
    const { dispatch, postId } = this.props;
    const newLimit = limit + 10;

    api.comments(postId, newLimit).then(res => {
      dispatch({ type: 'COMMENTS', data: res });
      setTimeout(() => this.setState({ limit: newLimit, loading: false }), 800);
    });
  }

  render() {
    const { loading } = this.state;
    const { posts } = this.props;

    return (
      <Wrapper>
        <Title>Leave a comment</Title>
        <CommentForm />
        <Title>Comments</Title>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {posts.comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
            <Button label="load more" onClick={this.loadMore} />
          </Fragment>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Comments);
