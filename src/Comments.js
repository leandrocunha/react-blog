import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import api from './api';
import Button from './Button';
import Comment from './Comment';
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
    this.state = { limit: 3, loading: true };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const { dispatch, postId } = this.props;
    api.comments(postId).then(res => {
      dispatch({ type: 'COMMENTS', data: res });
      setTimeout(() => this.setState({ loading: false }), 800);
    });
  }

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
    const { comments } = this.props;

    return (
      <Wrapper>
        <Title>Comments</Title>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {comments.map(comment => (
              <Comment key={comment.id} {...comment} />
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
