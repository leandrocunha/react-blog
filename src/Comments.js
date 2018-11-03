import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import api from './api';

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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Comments);
