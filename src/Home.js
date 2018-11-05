import React, { Component, Fragment } from 'react';
import api from './api';
import { connect } from 'react-redux';
import Header from './Header';
import Loading from './Loading';
import Posts from './Posts';

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
    const { posts } = this.props;

    return (
      <Fragment>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <Posts posts={posts.list} onClick={this.loadMore} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
