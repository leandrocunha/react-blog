import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import api from './api';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { match } = this.props;
    api
      .post(match.params.id)
      .then(res => this.setState({ loading: false, post: { ...res } }));
  }

  render() {
    const { loading, post } = this.state;

    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Post</li>
        </ul>
        {loading ? (
          <p>loading</p>
        ) : (
          <Fragment>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Post;
