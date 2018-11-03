import React, { Component, Fragment } from 'react';
import api from './api';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { limit: 3, loading: true };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const { postId } = this.props;
    api
      .comments(postId)
      .then(res => this.setState({ loading: false, comments: res }));
  }

  loadMore() {
    const { limit } = this.state;
    const { postId } = this.props;
    const newLimit = limit + 10;

    api
      .comments(postId, newLimit)
      .then(res => this.setState({ comments: res, limit: newLimit }));
  }

  render() {
    const { comments, loading } = this.state;

    return (
      <div>
        <h2>Comments</h2>
        {loading ? (
          <p>loading...</p>
        ) : (
          <Fragment>
            {comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            ))}
            <button onClick={this.loadMore}>load more</button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Comments;
