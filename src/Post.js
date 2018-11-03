import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from './api';
import Comments from './Comments';

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
            <Comments postId={post.id} />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Post);
