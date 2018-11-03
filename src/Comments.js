import React, { Component } from 'react';
import api from './api';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { postId } = this.props;
    api
      .comments(postId)
      .then(res => this.setState({ loading: false, comments: res }));
  }

  render() {
    const { comments, loading } = this.state;

    return (
      <div>
        <h2>Comments</h2>
        {loading ? (
          <p>loading...</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Comments;
