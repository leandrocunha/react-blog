import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import api from './api';
import { preview } from './utils';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, limit: 10 };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    api.posts().then(res => {
      dispatch({ type: 'LIST', data: res });
      setTimeout(() => this.setState({ loading: false }), 800);
    });
  }

  loadMore() {
    const { dispatch } = this.props;
    const { limit } = this.state;
    const newLimit = limit + 10;

    api.posts(newLimit).then(res => {
      dispatch({ type: 'LIST', data: res });
      setTimeout(() => this.setState({ limit: newLimit, loading: false }), 800);
    });
  }

  render() {
    const { loading } = this.state;
    const { list } = this.props;

    return (
      <div>
        <h1>Hello, world!</h1>
        {loading ? (
          <p>loading</p>
        ) : (
          <Fragment>
            {list.map(post => (
              <div key={post.id}>
                <h2>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{preview(post.body)}</p>
                <div>
                  <p>{post.userId}</p>
                </div>
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

export default connect(mapStateToProps)(Home);
